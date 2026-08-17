import Link from "next/link";
import { ChevronRight } from "lucide-react";

import TagCard from "@/components/cards/TagCard";
import { HOT_NETWORK_QUESTIONS, POPULAR_TAGS } from "@/constants/right-sidebar";
import ROUTES from "@/constants/routes";
import { cn } from "@/lib/utils";

const RightSidebar = () => {
  return (
    <aside className="custom-scrollbar sticky top-0 flex h-[calc(100dvh-5.5rem)] w-[350px] shrink-0 flex-col overflow-y-auto border-l light-border background-light900_dark200 p-6 max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Hot Network</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {HOT_NETWORK_QUESTIONS.map((question, index) => (
            <Link
              key={question._id}
              href={ROUTES.QUESTION(question._id)}
              className="flex cursor-pointer items-start justify-between gap-5"
            >
              <span className="flex items-start gap-3">
                <span
                  className={cn(
                    "flex-center size-5 shrink-0 rounded-[4px] text-[11px] font-bold",
                    index % 2 === 0
                      ? "bg-primary-100 text-primary-500"
                      : "bg-link/15 text-link",
                  )}
                  aria-hidden
                >
                  ?
                </span>
                <p className="body-medium text-dark500_light700">
                  {question.title}
                </p>
              </span>
              <ChevronRight
                className="mt-0.5 size-4 shrink-0 text-dark500_light700"
                aria-hidden
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {POPULAR_TAGS.map((tag) => (
            <TagCard
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              questions={tag.questions}
              mark={tag.mark}
              markClassName={tag.markClassName}
              showCount
            />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
