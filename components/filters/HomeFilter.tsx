"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { HOME_PAGE_FILTERS, type HomePageFilter } from "@/constants/filters";
import { formUrlQuery, removeKeysFromUrlQuery } from "@/lib/url";
import { cn } from "@/lib/utils";

const HomeFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeFilter = searchParams.get("filter") ?? "";

  const handleFilterClick = (value: HomePageFilter) => {
    const params = searchParams.toString();
    const newUrl =
      value === activeFilter
        ? removeKeysFromUrlQuery({
            params,
            pathname,
            keysToRemove: ["filter"],
          })
        : formUrlQuery({
            params,
            pathname,
            key: "filter",
            value,
          });

    router.push(newUrl, { scroll: false });
  };

  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex">
      {HOME_PAGE_FILTERS.map((item) => (
        <button
          key={item.value}
          type="button"
          onClick={() => handleFilterClick(item.value)}
          className={cn(
            "rounded-lg px-6 py-3 body-medium capitalize shadow-none",
            activeFilter === item.value
              ? "bg-primary-100 text-primary-500"
              : "background-light800_dark300 text-light-500 hover:bg-light-800 dark:text-light-500 dark:hover:bg-dark-300",
          )}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default HomeFilter;
