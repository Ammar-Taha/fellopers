import Link from "next/link";
import { LogIn, LogOut, UserPlus } from "lucide-react";

import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import { signOutUser } from "@/lib/actions/auth.action";
import { cn } from "@/lib/utils";

type SidebarAuthProps = {
  isLoggedIn: boolean;
  compact?: boolean;
};

const SidebarAuth = ({ isLoggedIn, compact = false }: SidebarAuthProps) => {
  if (isLoggedIn) {
    return (
      <form action={signOutUser}>
        <Button
          type="submit"
          aria-label="Logout"
          className={cn(
            "min-h-10 w-full gap-4 rounded-lg btn-secondary px-4 py-3 small-medium shadow-none",
            compact && "justify-center nav:justify-start",
          )}
        >
          <LogOut className="size-5 text-dark300_light900" aria-hidden />
          <span
            className={cn("text-dark300_light900", compact && "max-nav:hidden")}
          >
            Logout
          </span>
        </Button>
      </form>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <Link
        href={ROUTES.SIGN_IN}
        aria-label="Log In"
        className="flex min-h-10 w-full items-center justify-center gap-2 rounded-lg btn-secondary px-4 py-3 small-medium shadow-none"
      >
        <LogIn
          className={cn(
            "size-5 text-primary-500",
            compact ? "nav:hidden" : "hidden",
          )}
          aria-hidden
        />
        <span
          className={cn("primary-text-gradient", compact && "max-nav:hidden")}
        >
          Log In
        </span>
      </Link>
      <Link
        href={ROUTES.SIGN_UP}
        aria-label="Sign Up"
        className="flex min-h-10 w-full items-center justify-center gap-2 rounded-lg border light-border-2 btn-tertiary px-4 py-3 small-medium text-dark400_light900 shadow-none"
      >
        <UserPlus
          className={cn("size-5", compact ? "nav:hidden" : "hidden")}
          aria-hidden
        />
        <span className={cn(compact && "max-nav:hidden")}>Sign Up</span>
      </Link>
    </div>
  );
};

export default SidebarAuth;
