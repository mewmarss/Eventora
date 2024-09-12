import connectToDB from "@/lib/mongodb";
import User from "@/lib/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface RequestBody {
  email: string;
  password: string;
}

export async function POST(request: Request): Promise<NextResponse> {
  await connectToDB();

  try {
    const body: RequestBody = await request.json();
    const { email, password } = body;

    const user = await User.findOne({ email }).exec();

    if (!user) {
      return NextResponse.json(
        { erroe: "User doesn't exists!" },
        { status: 400 }
      );
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      return NextResponse.json(
        { erroe: "Invalid credentials!" },
        { status: 401 }
      );
    }

    //jwt token
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    const token = await jwt.sign(tokenData, process.env.JWT_TOKEN_SECRET, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      message: "Logged in successfully",
      success: true,
    });

    response.cookies.set("token", token, { httpOnly: true });

    return response;
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
