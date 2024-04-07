import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "@/util/schema";
import { env } from "std-env";

const sql = postgres(env.DB_URL!, {
  prepare: false,
});

const db = drizzle(sql, { schema });

export { db, schema, sql };
