import { defineConfig } from "drizzle-kit";
import "dotenv/config";

if (!process.env.DB_URL) throw new Error("Missing DB_URL");

export default defineConfig({
  schema: "./src/util/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    host: "aws-0-eu-central-1.pooler.supabase.com",
    port: 6543,
    user: "postgres.xdbilasvohenphrkybia",
    password: "FG4X6*Fsy*2pp*Jo#S&73Ln*iwC8QE",
    database: "postgres",
    ssl: false,
  },
  verbose: true,
  strict: true,
});
