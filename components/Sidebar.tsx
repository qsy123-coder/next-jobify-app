"use client";
import React from "react";
import Logo from "../assets/logo.svg";
import Image from "next/image";
import links from "@/utils/links";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
const Sidebar = () => {
  const pathName = usePathname();
  return (
    <aside className="h-full bg-muted px-4 py-8">
      <header>
        <Image src={Logo} alt="logo" className="mx-auto" />
      </header>
      <section className="flex flex-col gap-10 mt-20 ">
        {links.map((link, index) => {
          return (
            <Button
              asChild
              key={link.label}
              className="flex gap-4 capitalize items-center "
              variant={pathName === link.href ? "default" : "ghost"}
            >
              <Link href={link.href}>
                {link.icon}
                {link.label}
              </Link>
            </Button>
          );
        })}
      </section>
    </aside>
  );
};

export default Sidebar;
