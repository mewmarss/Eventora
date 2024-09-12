import Button from "@/components/shared/Button";
import { Ellipsis, Ticket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const Card = () => {
  return (
    <div className="w-fit rounded-md border flex flex-col items-center cursor-pointer">
      <Image
        src="/images/concert.jpg"
        alt="Image"
        width={300}
        height={200}
        objectFit="cover"
        lang="fill"
        className="rounded-t-md border"
      />
      <div className="flex flex-col gap-1 mt-3 text-center">
        <h1 className="text-xl font-semibold">Music Festival</h1>
        <h2 className="text-sm text-gray-500 font-medium">June 15, 2023</h2>
      </div>
      <div className="p-3 text-center">
        <h2 className=" text-ellipsis">
          Join us for a weekend of live music, food, and fun at our annual Music
          Festival. Featuring top artists from around the world.
        </h2>
      </div>
      <Link href="/event/1" className="mb-3 w-1/3">
        <Button className="bg-orange-400 text-white">Buy</Button>
      </Link>
    </div>
  );
};

export default Card;
