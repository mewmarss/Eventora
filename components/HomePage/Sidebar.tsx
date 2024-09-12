"use client";

import { Calendar, House, Settings, Ticket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import Tooltip from "../shared/Tooltip";

const Sidebar = () => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        icon: <House />,
        label: "Home",
        href: "/home",
        active: pathname == "/home",
      },
      {
        icon: <Calendar />,
        label: "Upcoming",
        href: "/upcoming",
        active: pathname == "/upcoming",
      },
      {
        icon: <Ticket />,
        label: "Tickets",
        href: "/tickets",
        active: pathname == "/tickets",
      },
      {
        icon: <Settings />,
        label: "Settings",
        href: "/settings",
        active: pathname == "/settings",
      },
    ],
    [pathname]
  );

  return (
    <div className="w-fit border h-full bg-white flex flex-col gap-4 py-4 items-center fixed z-50 left-0">
      <Link href="/home" className="flex gap-1 items-center">
        <Image src="/images/logo.png" alt="Eventora" width={50} height={50} />
      </Link>
      <div className="flex flex-col gap-y-8 px-5 py-4 items-center">
        {routes.map((link) => (
          <Tooltip text={link.label} position="right">
            <Link
              href={link.href}
              key={link.label}
              className={`flex hover:bg-gray-300/30 hover:text-orange-400 rounded-lg transition duration-150 p-2 ${
                link.active
                  ? "bg-orange-200/50 text-orange-400 hover:bg-orange-200/80"
                  : ""
              }`}
            >
              {link.icon}
            </Link>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
