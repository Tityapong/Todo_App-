// "use server";

// import { db } from "@/db/drizzle";
// import { users } from "@/db/schema";
// // import { clerkClient } from "@clerk/nextjs/server";
// import { eq } from "drizzle-orm";
// // import { revalidatePath } from "next/cache";

// export const getAllUsers = async () => {
//   const data = await db.select().from(users);
//   return data;
// };

// export const getUser = async (userId: number) => {
//   const user = await db.query.users.findFirst({
//     where: eq(users.id, userId),
//     with: {
//       todos: true
//     }
//   });
//   return user;
// };

// export const addUser = async (user:  {
//   clerkId: string;
//   email: string;

//   name: string;
//   firstName: string;
//   lastName: string;
//   photo: string;
// }) => {
//   await db.insert(users).values({
//     clerkId: user.clerkId,
//     email: user.email,
//     name: user.name,
//     firstName: user.firstName,
//     lastName: user.lastName,
//     photo: user.photo
//   })
//   .returning({clerkClientId:users?.clerkId})
//   // revalidatePath("/");
// };

"use server";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

import { db } from "@/db/drizzle";
import { users } from "@/db/schema";

export const getAllUsers = async () => {
  const data = await db.select().from(users);
  return data;
};

export const getUser = async (userId: any) => {
  const user = await db.query.users.findMany({
    where: (users, { eq }) => eq(users.clerkId, userId),
    with: {
      todos: true,
    },
  });

  return user;
};

export const addUser = async (user: any) => {
  await db
    .insert(users)
    .values({
      clerkId: user?.clerkId,
      email: user?.email,
      name: user?.name!,
      firstName: user?.firstName,
      lastName: user?.lastName,
      photo: user?.photo,
    })
    .returning({ clerkClientId: users?.clerkId });

  // revalidatePath("/");
};
