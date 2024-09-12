import Image from "next/image";
import React from "react";
import Button from "../shared/Button";

const Mockup = () => {
  return (
    <div className="py-14 grid grid-cols-2">
      <div>
        <Image src="/images/mockup.png" alt="Mockup" width={800} height={800} />
      </div>
      <div className="flex flex-col gap-6 justify-center">
        <div className="text-left flex-col gap-2 flex">
          <h1 className="text-4xl font-bold">
            Elevate Your Event Planning Experience
          </h1>
          <h2 className="text-lg text-gray-500">
            Struggling with complex event management? Start with Eventora today
            and streamline your events with ease, from planning to execution
          </h2>
        </div>
        <Button className="bg-orange-400 text-white w-1/3">
          Discover Eventora
        </Button>
      </div>
    </div>
  );
};

export default Mockup;
