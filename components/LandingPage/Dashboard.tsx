import Image from "next/image";
import React from "react";

const Dashboard = () => {
  return (
    <div className="py-20 flex justify-center">
      <div>
        <Image
          src="/images/dashboard.png"
          alt="Dashboard"
          width={1200}
          height={600}
          className="border-2 rounded-lg shadow-xl"
        />
      </div>
    </div>
  );
};

export default Dashboard;
