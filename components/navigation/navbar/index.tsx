import Image from "next/image";
import Link from "next/link";
import { Search, User } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 shadow-light-300 dark:shadow-none sticky top-0 z-50 w-full gap-5 p-6 sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/images/site-logo.svg"
          width={32}
          height={32}
          alt="Fellopers"
        />
        <p className="h2-bold font-space-grotesk text-dark100_light900 max-sm:hidden">
          Fell<span className="text-primary-500">opers</span>
        </p>
      </Link>

      <div className="max-w-150 flex-1 max-md:hidden">
        <label className="background-light800_darkgradient flex min-h-14 grow items-center gap-2 rounded-xl px-4">
          <Search className="size-5 shrink-0 text-light-400" aria-hidden />
          <Input
            type="search"
            placeholder="Search anything globally"
            className="paragraph-regular placeholder no-focus h-auto min-h-0 border-none bg-transparent px-0 py-0 shadow-none ring-0 focus-visible:border-transparent focus-visible:ring-0 dark:bg-transparent"
          />
        </label>
      </div>

      <div className="flex-between gap-5">
        <ThemeToggle />
        <div
          className="flex-center size-9 overflow-hidden rounded-full bg-primary-100"
          aria-label="Account"
        >
          <User className="size-5 text-primary-500" aria-hidden />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
