import Link from "next/link";
import { X } from "lucide-react";

import ROUTES from "@/constants/routes";
import { cn } from "@/lib/utils";

type TagCardProps = {
  _id: string;
  name: string;
  questions?: number;
  showCount?: boolean;
  mark?: string;
  markClassName?: string;
  compact?: boolean;
  onRemove?: () => void;
};

const TagCard = ({
  _id,
  name,
  questions,
  showCount = false,
  mark,
  markClassName,
  compact = false,
  onRemove,
}: TagCardProps) => {
  const badge = (
    <span
      className={cn(
        "flex items-center rounded-md background-light800_dark300 px-4 py-2 subtle-medium text-light400_light500 uppercase",
        onRemove ? "gap-2" : "gap-1.5",
      )}
    >
      {mark ? (
        <span
          className={cn(
            "flex-center size-3.5 rounded-[3px] text-[8px] font-bold",
            markClassName,
          )}
        >
          {mark}
        </span>
      ) : null}
      {name}
      {onRemove ? <X className="size-3.5" aria-hidden /> : null}
    </span>
  );

  if (onRemove) {
    return (
      <button
        type="button"
        onClick={onRemove}
        aria-label={`Remove ${name} tag`}
      >
        {badge}
      </button>
    );
  }

  if (compact) {
    return <Link href={ROUTES.TAG(_id)}>{badge}</Link>;
  }

  return (
    <Link href={ROUTES.TAG(_id)} className="flex-between gap-2">
      {badge}
      {showCount && questions !== undefined ? (
        <p className="small-medium text-dark500_light700">{questions}+</p>
      ) : null}
    </Link>
  );
};

export default TagCard;
