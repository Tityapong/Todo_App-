"use server";

import {eq}   from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db }  from "@/db/drizzle";
import {  users } from "@/db/schema";

/*************  ✨ Codeium Command ⭐  *************/
/**
 * Retrieves a list of all users from the database.
 *
 * @returns {Promise<Array<any>>} A list of all users
 */
/******  d3e2dc62-0e2e-4593-91f0-5f399f92f79b  *******/

export const getAllUsers = async () => {
  const data = await db.select().from(users);
  return data;
};

export const getUser = async (userId : number) => {
  const user = await db.query.users.findMany({
    where : (users , {eq}) => eq(users.id, userId) ,
    with : {
      todos : true
    }
  })
  return user
}

export const addUser = async (user: any) => {
  await db.insert(users).values({
    clerkId:user?.clerkId,
    email:user?.email,
    name:user?.name,
    firstName:user?.firstName,
    lastName:user?.lastName,
    photo:user?.photo
   
  });
  // revalidatePath("/");
};
