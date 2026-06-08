import React from "react";
import LinksDropdown from "./LinksDropdown";
import ThemeToggle from "./ThemeToggle";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="w-full bg-muted flex justify-between items-center px-8 py-6 md:px-12 lg:px-16">
      <div>
        <LinksDropdown />
      </div>
      <div className="flex gap-x-4 items-center">
        <ThemeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
};

export default Navbar;
