import Event from "@/components/EventPage/Event";
import Navbar from "@/components/HomePage/Navbar";
import Sidebar from "@/components/HomePage/Sidebar";

const EventId = ({ params }) => {
  return (
    <div>
      <div className="flex h-screen">
        <div className="z-50">
          <Sidebar />
        </div>
        <div className="w-full flex flex-col">
          <div className="z-40">
            <Navbar />
          </div>
          <div className="p-6 w-full flex mt-[85px] pl-[105px]">
            <Event />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventId;
