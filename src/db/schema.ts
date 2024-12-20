
import { relations } from "drizzle-orm";
import {
  integer,
  text,
  boolean,
  pgTable,
  serial,
  timestamp,
  bigint,
} from "drizzle-orm/pg-core";


// export const users = pgTable("users", {
//   id: serial("id").primaryKey(),
//   name: text("name").notNull(),
//   email: text("email").notNull().unique(),
//   clerkId: text("clerk_id").notNull().unique(),
//   firstName: text("first_name").notNull(),
//   lastName: text("last_name").notNull(),
//   photo: text("photo").notNull(),
 
//   created_at: timestamp("created_at").defaultNow().notNull(),
//   updated_at: timestamp("updated_at").defaultNow().notNull(),
// });
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  clerk_id: text('clerk_id').notNull().unique(),
  email: text('email').notNull(),
  name: text('name').notNull(),
  first_name: text('first_name'),
  last_name: text('last_name'),
  photo: text('photo'),
  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at').defaultNow(),
});

export const todos = pgTable("todos", {
  id: bigint("id", { mode: "number" }).primaryKey(),
  text: text("text").notNull(),
  done: boolean("done").default(false).notNull(),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id),
});

export const todosRelations = relations(todos, ({ one }) => ({
  user: one(users, { fields: [todos.userId], references: [users.id] }),
}));

export const userRelations = relations(users, ({many})=>({
  todos:many(todos),
}));
