"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { SIDEBAR_LINKS } from "@/constants/sidebar";
import { cn } from "@/lib/utils";

type NavLinksProps = {
  isMobileNav?: boolean;
};

const NavLinks = ({ isMobileNav = false }: NavLinksProps) => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-6">
      {SIDEBAR_LINKS.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;
        const Icon = item.icon;

        return (
          <Link
            key={item.route}
            href={item.route}
            className={cn(
              "flex items-center bg-transparent p-4",
              isMobileNav
                ? "justify-start gap-4"
                : "justify-center gap-4 nav:justify-start",
              isActive
                ? "rounded-lg text-light-900 primary-gradient"
                : "text-dark300_light900",
            )}
            aria-label={item.label}
          >
            <Icon className="size-5 shrink-0" aria-hidden />
            <p
              className={cn(
                isActive ? "base-bold" : "base-medium",
                !isMobileNav && "max-nav:hidden",
              )}
            >
              {item.label}
            </p>
          </Link>
        );
      })}
    </nav>
  );
};

export default NavLinks;
