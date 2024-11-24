import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema"

const sql = neon(process.env.DATABASE_URL as string);
// const db = drizzle(sql);

// export default db; // Use default export
export const db = drizzle(sql ,{schema});
