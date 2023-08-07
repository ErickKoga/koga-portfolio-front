"use client";

// Importing dependencies
import { links } from "@/helpers/navlinks";
import Link from "next/link";
import { useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import Button from "./Button";

// Component definition
const Navbar = () => {
  const [expand, setExpand] = useState<boolean>(true);

  const handleExpandToggle = () => setExpand(!expand);

  return (
    <div className="z-10 flex flex-col items-center h-screen gap-4 p-4 shadow-2xl bg-gradient-to-r from-slate-50 to-white">
      <h1
        style={{
          textOrientation: "upright",
          writingMode: "vertical-lr",
          textShadow: "1px 1px 4px #525b56",
        }}
      >
        古雅
      </h1>
      <Button
        ariaLabel="Toggle expansion"
        intent="secondary"
        size="wide"
        className="justify-end"
        onClick={handleExpandToggle}
      >
        {expand ? <IoChevronBackOutline /> : <IoChevronForwardOutline />}
      </Button>
      <div>
        {links.map((link) => (
          <Link key={link.label} href={link.url}>
            <Button
              ariaLabel={`Navigate to ${link.label}`}
              intent="ghost"
              size="wide"
              className="justify-start whitespace-nowrap"
            >
              {link.icon}
              {expand ? link.label : undefined}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
