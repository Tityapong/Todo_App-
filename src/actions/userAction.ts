"use server";

import { db } from "@/db/drizzle";
import { users } from "@/db/schema";

type User = {
  clerkId: string;
  email: string;
  name: string;
  firstName?: string;
  lastName?: string;
  photo?: string;
};

export const getAllUsers = async () => {
  const data = await db.select().from(users);
  return data;
};


export const getUser = async (userId: string) => {
  const user = await db.query.users.findMany({
    where: (users, { eq }) => eq(users.clerk_id, userId), // Use `clerk_id` here
    with: {
      todos: true,
    },
  });

  return user;
};

export const addUser = async (user: User) => {
  const insertedUser = await db
    .insert(users)
    .values({
      clerk_id: user.clerkId, // Match `clerk_id` in schema
      email: user.email,
      name: user.name,
      first_name: user.firstName, // Match `first_name` in schema
      last_name: user.lastName,   // Match `last_name` in schema
      photo: user.photo,
    })
    .returning(); // Return inserted row(s) if needed

  return insertedUser; // Return inserted data if required.
};
