import { db } from "@/util/database";

export const runtime = "edge";

export default async function Home() {
  const data = await db.query.testTable.findMany();

  return (
    <main>
      Data is:<pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
