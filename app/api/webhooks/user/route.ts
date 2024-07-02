import { createUser, getUserById } from '@/lib/actions/user.actions';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export const GET = async () => {
    try {
        const id = "user_2ifmQcc6bMVcXQvvzS4tdsCwQKA"
        // const user = await getUserById(id);
        const user = {
            clerkId: id,
            email: "tunglam.xm94+7@gmail.com",
            username: "lambt_7",
            firstName: null,
            lastName: null,
            photo: "https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yaVBWeDFwS090bmRkb1pFRjROUFBCb3ZQZmgiLCJyaWQiOiJ1c2VyXzJpZm1RY2M2Yk1WY1hRdnZ6UzR0ZHNDd1FLQSJ9",
        };

        const newUser = await createUser(user);
        console.log("new user.....", newUser)
        return NextResponse.json(id);
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch posts!");
    }
};