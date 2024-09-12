"use client";

import { useState, useEffect } from "react";
import Items from "./components/Items";
import SkeletonEvents from "../shared/SkeletonEvents";

const Recommended = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex h-full w-[30%] flex-col gap-6">
      {isLoading ? (
        Array.from({ length: 2 }).map((_, idx) => <SkeletonEvents key={idx} />)
      ) : (
        <>
          <div className="border rounded-md p-2 flex flex-col gap-4">
            <div className="font-semibold text-center">
              <h1>Upcoming Events</h1>
            </div>
            <div className="flex flex-col gap-5">
              <Items className="hover:text-orange-400 transition duration-200">
                Tech Seminar
              </Items>
              <Items className="hover:text-orange-400 transition duration-200">
                Tech Seminar
              </Items>
              <Items className="hover:text-orange-400 transition duration-200">
                Tech Seminar
              </Items>
            </div>
          </div>
          <div className="border rounded-md p-2 flex flex-col gap-4">
            <div className="font-semibold text-center">
              <h1>Recommended for you</h1>
            </div>
            <div className="flex flex-col gap-5">
              <Items className="hover:text-orange-400 transition duration-200">
                Tech Seminar
              </Items>
              <Items className="hover:text-orange-400 transition duration-200">
                Tech Seminar
              </Items>
              <Items className="hover:text-orange-400 transition duration-200">
                Tech Seminar
              </Items>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Recommended;
