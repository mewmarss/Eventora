import Feed from "@/components/HomePage/Feed";
import Navbar from "@/components/HomePage/Navbar";
import Recommended from "@/components/HomePage/Recommended";
import Sidebar from "@/components/HomePage/Sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Eventora",
  description:
    "Discover and manage events effortlessly with a platform designed for seamless planning and connection.",
};

const Home = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="w-full flex flex-col">
        <Navbar />
        <div className="p-6 w-full flex justify-between mt-[85px] pl-[105px]">
          <Feed />
          <Recommended />
        </div>
      </div>
    </div>
  );
};

export default Home;
