{
  description = "Dev Shell for running in Nix";

  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = {
    nixpkgs,
    flake-utils,
    ...
  }:
    flake-utils.lib.eachDefaultSystem
    (
      system: let
        pkgs = nixpkgs.legacyPackages.${system};
      in {
        devShell = with pkgs;
          mkShell {
            buildInputs = [
              alejandra
              nodejs
              nodePackages.pnpm
              openssl
              # glibc

              # node-canvas:
              python3
              pkg-config
              pixman
              cairo
              pango
              # libcxx
            ];

            # NIX_LD = lib.fileContents "${stdenv.cc}/nix-support/dynamic-linker";

            shellHook = ''
              PATH="$PWD/node_modules/.bin:$PATH"
              export DOCKER_HOST="unix://$XDG_RUNTIME_DIR/podman/podman.sock"
              export SSL_CERT_FILE="/etc/ssl/certs/ca-certificates.crt"
            '';

            # LLVM_SYMBOLIZER = "${libllvm}/bin/llvm-symbolizer";
          };
      }
    );
}
