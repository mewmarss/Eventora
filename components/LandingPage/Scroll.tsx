"use client";

import { useState, useEffect } from "react";
import Header from "../shared/Header";

const Scroll = ({ children }: any) => {
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Adding 100px offset

      for (const link of navLinks) {
        const sectionId = link.href.slice(1); // Remove the '#' from href
        const section = document.getElementById(sectionId);

        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sectionId);
            return; // Exit the loop once we've found the active section
          }
        }
      }

      // If we're not in any section, clear the active section
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  return (
    <>
      <Header activeSection={activeSection} />
      {children}
    </>
  );
};

export default Scroll;
