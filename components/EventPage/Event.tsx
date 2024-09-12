"use client";

import Button from "../shared/Button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useState, useEffect } from "react";
import EventSkeleton from "./components/EventSkeleton";

const Event = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6 w-full">
      {isLoading ? (
        <div className="col-span-3 bg-white rounded-lg">
          <EventSkeleton />
        </div>
      ) : (
        <>
          <div className="rounded-lg border p-6 text-center flex flex-col items-center relative">
            <Link
              href="/home"
              className=" absolute top-4 left-4 hover:bg-gray-200 transition duration-150 rounded-full p-2"
            >
              <ChevronLeft />
            </Link>
            <img
              src="/images/concert.jpg"
              alt="Event"
              className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold">Music Festival</h3>
            <p className="text-gray-500">June 15, 2023</p>
            <Button className="bg-orange-400 mt-8 text-white w-1/3">
              Buy Tickets
            </Button>
          </div>
          <div className="col-span-2 bg-white rounded-lg border p-6">
            <h2 className="text-xl font-semibold mb-4">Event Description</h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Join us for the annual{" "}
                <span className="font-semibold">Music Festival</span> at Central
                Park, New York on
                <span className="font-semibold"> June 15, 2023</span>. This
                event features a lineup of world-class musicians from various
                genres, including rock, jazz, and electronic music. You’ll have
                the opportunity to experience live performances, delicious food
                from local vendors, and an unforgettable evening under the
                stars.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The festival gates open at 5:00 PM, and the show begins at 7:00
                PM. Tickets are available for general admission and VIP
                packages. General admission tickets are priced at{" "}
                <span className="font-semibold">$50</span>, while VIP packages,
                which include premium seating and exclusive access to artist
                meet-and-greets, start at
                <span className="font-semibold"> $150</span>.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Be sure to secure your spot by purchasing tickets early, as this
                event is known to sell out quickly. We look forward to seeing
                you at the festival!
              </p>
            </div>
          </div>

          <div className="col-span-3 bg-white rounded-lg border p-6">
            <h2 className="text-xl font-semibold mb-4">Event Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-medium">Event Name:</p>
                <p>Music Festival</p>
              </div>
              <div>
                <p className="font-medium">Date:</p>
                <p>June 15, 2023</p>
              </div>
              <div>
                <p className="font-medium">Location:</p>
                <p>Central Park, New York</p>
              </div>
              <div>
                <p className="font-medium">Tickets:</p>
                <p>$50 (General Admission)</p>
              </div>
              <div>
                <p className="font-medium">Organizer:</p>
                <p>Music Lovers Inc.</p>
              </div>
              <div>
                <p className="font-medium">Attendees:</p>
                <p>1,500</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Event;
