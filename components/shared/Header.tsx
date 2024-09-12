import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Header = ({ activeSection }: any) => {
  const navLinks = [
    {
      label: "Features",
    },
    {
      label: "Pricing",
    },
    {
      label: "Contact",
    },
  ];

  return (
    <nav className="bg-white/30 backdrop-blur-lg backdrop-saturate-150 border border-white/20 rounded-xl mt-5 top-0 left-1/2 transform -translate-x-1/2 z-50 shadow-lg fixed w-auto max-w-5xl">
      <div className="flex items-center gap-28 md:gap-8 p-2">
        <div>
          <Link href="/" className="flex gap-1 items-center">
            <Image
              src="/images/logo.png"
              alt="Eventora"
              width={50}
              height={50}
            />
            <span className="font-bold">Eventora</span>
          </Link>
        </div>
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <span
              key={link.label}
              className={`cursor-pointer ${
                activeSection === link.label.toLowerCase()
                  ? "text-orange-400 transition duration-200"
                  : ""
              }`}
            >
              {link.label}
            </span>
          ))}
        </div>
        <div>
          <Link href="/signup">
            <Button className="bg-orange-400 text-white font-semibold">
              Start for free
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
