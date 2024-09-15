import Image from "next/image";
import React from "react";
import Button from "./Button";

const companyLinks = ["About", "Services", "Careers", "Results"];
const legalLinks = ["Help", "Blog", "Privacy", "Terms"];

const Footer = () => {
  return (
    <>
      <div className="mt-5 border-t-2 p-4 w-full flex justify-center gap-4">
        <div className="flex justify-between items-center max-w-5xl w-full border-b-2 pb-12">
          <div className="flex flex-col gap-2">
            <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
            <h2 className="text-xl font-semibold">Join our newsletter!</h2>
            <h3 className="text-gray-500">
              Sign up to our newsletter to get the latest news and updates.
            </h3>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter your email"
                className="border rounded-l-md p-2 outline-none focus:border-orange-400 transition"
              />
              <Button className="bg-orange-400 w-1/4 rounded-l-none text-white">
                Get notified
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-20">
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold">Company</h2>
              {companyLinks.map((link) => (
                <span
                  className="text-gray-500 hover:text-gray-700 transition cursor-pointer"
                  key={link}
                >
                  {link}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold">Legal</h2>
              {legalLinks.map((link) => (
                <span
                  className="text-gray-500 hover:text-gray-700 transition cursor-pointer"
                  key={link}
                >
                  {link}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center max-w-5xl w-full pb-4">
        <span>All rights reserved. 2024 Cura</span>
        <Button className="border w-1/6">Feedback</Button>
      </div>
    </>
  );
};

export default Footer;
