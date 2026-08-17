import Image from "next/image";
import Link from "next/link";

import { auth } from "@/auth";
import GlobalSearch from "@/components/navigation/navbar/GlobalSearch";
import MobileNav from "@/components/navigation/navbar/MobileNav";
import UserAvatar from "@/components/UserAvatar";
import { ThemeToggle } from "@/components/theme-toggle";
import ROUTES from "@/constants/routes";

const Navbar = async () => {
  const session = await auth();
  const user = session?.user;

  return (
    <header className="sticky top-0 z-50 w-full background-light900_dark200 shadow-light-300 dark:shadow-none">
      <nav className="flex-between gap-5 p-6 sm:px-12">
        <Link href={ROUTES.HOME} className="flex items-center gap-1">
          <Image
            src="/images/site-logo.svg"
            width={32}
            height={32}
            alt="Fellopers"
          />
          <p className="font-space-grotesk h2-bold text-dark100_light900 max-sm:hidden">
            Fell<span className="text-primary-500">opers</span>
          </p>
        </Link>

        <div className="max-w-150 flex-1 max-md:hidden">
          <GlobalSearch />
        </div>

        <div className="flex-between gap-5">
          <ThemeToggle />
          <UserAvatar name={user?.name} image={user?.image} />
          <MobileNav isLoggedIn={Boolean(user)} user={user} />
        </div>
      </nav>

      <div className="px-6 pb-4 sm:px-12 md:hidden">
        <GlobalSearch placeholder="Search for Questions Here..." />
      </div>
    </header>
  );
};

export default Navbar;
