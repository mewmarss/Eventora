"use client";

import axios from "axios";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

// export const metadata: Metadata = {
//   title: "Sign Up - Eventora",
// };

const SignUp = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user.username || !user.email || !user.password) {
      toast.error("Please complete all fields!");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("/api/signup", user);

      if (response.status === 200) {
        toast.success("Account created! Login to continue");
        router.push("/signin");
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 400) {
        toast.error("Account already exists. Please Sign in.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }

    setUser({
      username: "",
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
          <h1 className="text-2xl font-bold">Sign up</h1>
          <h2 className=" text-gray-500 font-medium text-base">
            Create an account to start using Eventora
          </h2>
        </div>
        <div className="flex flex-col gap-4 w-full mt-2">
          <div className="flex flex-col gap-2">
            <span className="font-medium">Full Name</span>
            <input
              type="text"
              placeholder="Enter your name"
              className="border rounded-lg p-2 outline-none focus:border-orange-400 transition duration-200"
              name="username"
              value={user.username}
              onChange={handleChange}
            />
          </div>
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
            "Continue"
          )}
        </button>
        <div className="flex gap-1 mt-5">
          <span className="text-gray-400">Been here before?</span>
          <Link href="signin" className="font-medium">
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
