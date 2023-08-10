"use client";

// Library imports
import Link from "next/link";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

// Internal imports
import Button from "@/components/Button";
import { links } from "@/helpers/navlinks";
import { useNavbarStore } from "@/stores/navbarStore.ts";

// Component definition
const Navbar = () => {
  // State and actions
  const { expand, toggleExpand } = useNavbarStore();

  // Component render
  return (
    <header className="shadow-2xl bg-zinc-700 text-zinc-100 sm:bg-zinc-100 sm:text-zinc-700">
      <div className="flex items-center justify-between gap-4 p-4 sm:flex-col">
        <Button intent="ghost" className="h-fit" href="/">
          <h1 className="orientation-upright vertical-writing-lr">古雅</h1>
        </Button>
        <Button
          ariaLabel="Toggle expansion"
          intent="secondary"
          size="wide"
          className="justify-center w-10 h-10 rotate-90 sm:w-full sm:rotate-0 ring-zinc-100 sm:ring-zinc-700 sm:h-fit"
          onClick={toggleExpand}
        >
          {expand ? <IoChevronBackOutline /> : <IoChevronForwardOutline />}
        </Button>
      </div>
      <div
        className={`absolute w-full sm:static bg-zinc-100 text-zinc-700 shadow-2xl sm:shadow-none sm:block ${
          !expand && "hidden"
        }`}
      >
        {links.map((link) => (
          <Link key={link.label} href={link.url}>
            <Button
              ariaLabel={`Navigate to ${link.label}`}
              intent="ghost"
              size="wide"
              className={`${
                expand ? "justify-start" : "justify-center"
              } whitespace-nowrap hover:font-medium`}
            >
              {link.icon}
              {expand && link.label}
            </Button>
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
