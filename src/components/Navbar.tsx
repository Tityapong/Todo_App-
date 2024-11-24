"use client";

import Link from "next/link";
import {
  SignOutButton,
  UserButton,
//   useClerk,
  useUser,
} from "@clerk/clerk-react";

export default function Navbar() {
  const { isSignedIn } = useUser();
//   const { signOut } = useClerk();

  return (
    <nav className="border-b h[8vh] flex items-center">
      <div className="container flex items-center justify-between">
        <Link href={"/"}>
          <h1 className="text-2xl font-bold">Todo</h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-5 p-3">
        {isSignedIn ? (
          <>
            <div className="w-[100px] bg-gray-200 p-2 rounded-md text-center">
              <SignOutButton />
            </div>
            <UserButton />
          </>
        ) : (
          <div className="flex items-center gap-x-5">
            <Link href={"/sign-in"}>
              <button className="w-[100px] bg-gray-200 p-2 rounded-md text-center">
                Sign In
              </button>
            </Link>
            <Link href={"/sign-up"}>
              <button className="w-[100px] bg-gray-200 p-2 rounded-md text-center">
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}