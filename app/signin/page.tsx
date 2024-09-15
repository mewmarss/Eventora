"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import axios from "axios";

const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user.email || !user.password) {
      toast.error("Please enter all fields!");
      return;
    }

    try {
      const response = await axios.post("/api/signin", user);

      if (response.status === 200) {
        toast.success("Log in successful!");
        router.push("/home");
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 400) {
        toast.error("User doesn't exists. Please Sign up.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }

    setUser({
      email: "",
      password: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        className="flex flex-col gap-4 items-center"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2 items-center">
          <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
          <h1 className="text-2xl font-bold">Sign in</h1>
          <h2 className=" text-gray-500 font-medium text-base">
            Welcome back! Sign in to your account.
          </h2>
        </div>
        <div className="flex flex-col gap-4 w-full mt-5">
          <div className="flex flex-col gap-2">
            <span className="font-medium">Email address</span>
            <input
              type="text"
              placeholder="Enter your email address"
              className="border rounded-lg p-2 outline-none focus:border-orange-400 transition duration-200"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-medium">Password</span>
            <input
              type="password"
              placeholder="Enter your password"
              className="border rounded-lg p-2 outline-none focus:border-orange-400 transition duration-200"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          className={`rounded-md p-2 text-center cursor-pointer transition w-full ${
            loading
              ? "bg-orange-300 cursor-not-allowed"
              : "bg-orange-400 text-white hover:opacity-80"
          }`}
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="loader w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin p-2"></div>
            </div>
          ) : (
            "Log in"
          )}
        </button>
        <div className="flex gap-1 mt-5">
          <span className="text-gray-400">Dont&apos;t have an account?</span>
          <Link href="signup" className="font-medium">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
