import React from "react";
import Button from "../shared/Button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="py-32 mt-20 w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_60%,transparent_100%)]">
      <div className="flex flex-col gap-8 items-center justify-center h-3/4 md:h-full text-center mx-10 md:mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          Where <span className="text-orange-400">Events</span> and People Meet
        </h1>
        <h2 className="text-base sm:text-lg md:text-xl text-gray-600">
          Discover and manage events effortlessly with a platform designed for
          seamless planning and connection.
        </h2>
        <div>
          <Link href="/signin">
            <Button className="bg-white shadow-xl border font-semibold hover:border-orange-400 transition duration-300">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
