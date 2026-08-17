import Link from "next/link";
import type { LucideIcon } from "lucide-react";

import UserAvatar from "@/components/UserAvatar";
import { cn } from "@/lib/utils";

type MetricProps = {
  icon?: LucideIcon;
  imgUrl?: string;
  alt: string;
  value: string | number;
  label?: string;
  href?: string;
  isAuthor?: boolean;
  className?: string;
};

const Metric = ({
  icon: Icon,
  imgUrl,
  alt,
  value,
  label,
  href,
  isAuthor = false,
  className,
}: MetricProps) => {
  const content = (
    <>
      {imgUrl ? (
        <UserAvatar name={alt} image={imgUrl} className="size-5" />
      ) : Icon ? (
        <Icon className="size-4 text-dark400_light700" aria-hidden />
      ) : (
        <UserAvatar name={alt} className="size-5" />
      )}
      <p
        className={cn(
          "flex items-center gap-1",
          isAuthor ? "body-medium" : "small-medium",
          className,
        )}
      >
        <span>{value}</span>
        {label ? (
          <span
            className={cn(isAuthor && "max-sm:hidden")}
          >{`${isAuthor ? "" : " "}${label}`}</span>
        ) : null}
      </p>
    </>
  );

  if (href) {
    return (
      <Link href={href} className="flex-center gap-1">
        {content}
      </Link>
    );
  }

  return <div className="flex-center gap-1">{content}</div>;
};

export default Metric;
