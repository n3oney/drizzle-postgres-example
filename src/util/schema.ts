import { pgTable, timestamp, uuid } from "drizzle-orm/pg-core";

export const testTable = pgTable("test_table", {
  id: uuid("id").primaryKey().defaultRandom(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});
