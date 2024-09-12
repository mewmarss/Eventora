import React from "react";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <div className="py-20 flex flex-col gap-4 text-center">
      <div className="flex flex-col gap-4 mb-5">
        <h1 className="font-bold text-4xl">Choose a plan that works for you</h1>
        <h2 className="font-medium text-xl text-gray-500">
          Get started with our free plan or upgrade to a premium plan for
          additional features
        </h2>
      </div>
      <PricingCard />
    </div>
  );
};

export default Pricing;
