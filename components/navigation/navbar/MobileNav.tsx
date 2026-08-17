"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import NavLinks from "@/components/navigation/NavLinks";
import SidebarAuth from "@/components/navigation/SidebarAuth";
import UserAvatar from "@/components/UserAvatar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ROUTES from "@/constants/routes";

type MobileNavProps = {
  isLoggedIn: boolean;
  user?: {
    name?: string | null;
    image?: string | null;
  } | null;
};

const MobileNav = ({ isLoggedIn, user }: MobileNavProps) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="size-9 md:hidden"
            aria-label="Open menu"
          />
        }
      >
        <Menu className="size-6 text-dark300_light900" />
      </SheetTrigger>
      <SheetContent
        side="left"
        showCloseButton={false}
        className="w-[300px] border-none background-light900_dark200 p-0 sm:max-w-sm"
      >
        <SheetHeader className="flex-row items-center justify-between gap-3 p-4">
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <Link href={ROUTES.HOME} className="flex items-center gap-1">
            <Image
              src="/images/site-logo.svg"
              width={28}
              height={28}
              alt="Fellopers"
            />
            <p className="font-space-grotesk h3-bold text-dark100_light900">
              Fell<span className="text-primary-500">opers</span>
            </p>
          </Link>
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <UserAvatar name={user?.name} image={user?.image} />
            <SheetClose
              render={
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="size-9"
                  aria-label="Close menu"
                />
              }
            >
              <X className="size-5 text-dark300_light900" />
            </SheetClose>
          </div>
        </SheetHeader>
        <div className="flex min-h-0 flex-1 flex-col justify-between gap-6 overflow-y-auto px-4 pb-6">
          <NavLinks isMobileNav />
          <SidebarAuth isLoggedIn={isLoggedIn} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
