import Image from "next/image";
import { User } from "lucide-react";

import { cn } from "@/lib/utils";

type UserAvatarProps = {
  name?: string | null;
  image?: string | null;
  className?: string;
};

const UserAvatar = ({ name, image, className }: UserAvatarProps) => {
  const initials = name
    ?.split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={cn(
        "flex-center size-9 overflow-hidden rounded-full bg-primary-100",
        className,
      )}
      aria-label={name ?? "Account"}
    >
      {image ? (
        <Image
          src={image}
          alt={name ?? "Account"}
          width={36}
          height={36}
          className="size-full object-cover"
        />
      ) : initials ? (
        <span className="body-semibold text-primary-500">{initials}</span>
      ) : (
        <User className="size-5 text-primary-500" aria-hidden />
      )}
    </div>
  );
};

export default UserAvatar;
