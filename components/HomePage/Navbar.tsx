import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@radix-ui/react-dropdown-menu";
import { Filter, Search, Ticket, User } from "lucide-react";
import { DropdownMenuItem } from "../ui/dropdown-menu";

const navItems = ["Admin", "Profile", "Saved Events", "Log out"];

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full py-5 border-b pl-[105px] px-6 fixed top-0 bg-white">
      <div className="relative flex items-center gap-4">
        <Search className="absolute left-3 text-gray-400 w-5" />
        <input
          type="text"
          placeholder="Search Events"
          className="bg-gray-100 rounded-md p-2 pl-10 outline-none border w-[350px] focus:border-orange-400 transition duration-200"
        />
        <div className="flex gap-4">
          <div className="flex gap-2 bg-gray-100 rounded-md p-2 border w-fit cursor-pointer hover:bg-gray-200/70 transition duration-150">
            <Filter color="#0084ff" />{" "}
            <span className="font-medium">Filter</span>
          </div>
          <div className="flex gap-2 bg-gray-100 rounded-md p-2 border w-fit cursor-pointer hover:bg-gray-200/70 transition duration-150">
            <Ticket color="#bb00ff" />
            <span className="font-medium">Buy Tickets</span>
          </div>
        </div>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300/70 transition duration-150">
            <User className="text-gray-500 w-6 h-6" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white p-2 mr-2 mt-2 shadow-xl border-2 rounded-lg">
          {navItems.map((item) => (
            <DropdownMenuItem key={item} className="cursor-pointer">
              {item}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Navbar;
