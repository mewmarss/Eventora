import connectToDb from "@/lib/mongodb";
import { NextResponse } from "next/server";
import User from "@/lib/models/User";
import bcrypt from "bcrypt";

interface RequestBody {
  username: string;
  email: string;
  password: string;
}

export async function POST(request: Request): Promise<NextResponse> {
  await connectToDb();

  try {
    const body: RequestBody = await request.json();
    const { username, email, password } = body;

    const user = await User.findOne({ email, username }).exec();
    if (user) {
      return NextResponse.json(
        { error: "User already exists!" },
        { status: 400 }
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ username, email, password: hashedPassword });
    const savedUser = await newUser.save();

    return NextResponse.json(
      { message: "User created Successfully!", success: true, savedUser },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
