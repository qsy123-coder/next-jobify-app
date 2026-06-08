"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import links from "@/utils/links";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu } from "lucide-react";
const LinksDropdown = () => {
  const pathName = usePathname();
  return (
    <div className="block lg:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" asChild size={"icon"}>
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40" align="start">
          <DropdownMenuItem className="flex flex-col gap-4">
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
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LinksDropdown;
