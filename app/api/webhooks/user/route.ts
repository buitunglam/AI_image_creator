import { createUser } from "@/lib/actions/user.actions";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const user = {
      clerkId: "12312434dsf3456",
      email: "lamtest@gmail.com",
      username: "username!",
      firstName: "first_name",
      lastName: "last_name",
      photo: "image_url",
  };

  const newUser = await createUser(user);
    return NextResponse.json({body: newUser, status: 200});
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts!");
  }
};