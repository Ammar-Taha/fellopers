import Link from "next/link";

import ROUTES from "@/constants/routes";
import { cn } from "@/lib/utils";

type TagCardProps = {
  _id: string;
  name: string;
  questions?: number;
  showCount?: boolean;
  mark?: string;
  markClassName?: string;
};

const TagCard = ({
  _id,
  name,
  questions,
  showCount = false,
  mark,
  markClassName,
}: TagCardProps) => {
  return (
    <Link href={ROUTES.TAG(_id)} className="flex-between gap-2">
      <span className="flex items-center gap-1.5 rounded-md background-light800_dark300 px-4 py-2 subtle-medium text-light400_light500 uppercase">
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
      </span>
      {showCount && questions !== undefined ? (
        <p className="small-medium text-dark500_light700">{questions}+</p>
      ) : null}
    </Link>
  );
};

export default TagCard;
