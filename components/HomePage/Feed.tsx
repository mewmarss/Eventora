"use client";

import Card from "./components/Card";
import SkeletonCard from "../shared/SkeletonCard";
import { useState, useEffect } from "react";

const Feed = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 h-screen pb-36 w-full pr-6 overflow-y-auto no-scrollbar">
      {isLoading
        ? Array.from({ length: 20 }).map((_, idx) => <SkeletonCard key={idx} />)
        : Array.from({ length: 20 }).map((_, idx) => (
            // <Card
            //   key={idx}
            //   title="Dummy Event"
            //   description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
            //   category="Tech"
            //   imgUrl="/images/placeholder.svg"
            // />
            <Card />
          ))}
      <Card />
    </div>
  );
};

export default Feed;
