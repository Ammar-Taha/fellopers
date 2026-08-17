"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { formUrlQuery, removeKeysFromUrlQuery } from "@/lib/url";
import { cn } from "@/lib/utils";

type LocalSearchProps = {
  route: string;
  placeholder?: string;
  queryKey?: string;
  className?: string;
};

const LocalSearch = ({
  route,
  placeholder = "Search for Questions Here...",
  queryKey = "query",
  className,
}: LocalSearchProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const urlQuery = searchParams.get(queryKey) ?? "";

  const [searchQuery, setSearchQuery] = useState(urlQuery);

  useEffect(() => {
    setSearchQuery(urlQuery);
  }, [urlQuery]);

  useEffect(() => {
    const debounce = setTimeout(() => {
      const currentQuery = searchParams.get(queryKey) ?? "";
      if (searchQuery === currentQuery) return;

      const params = searchParams.toString();

      if (searchQuery) {
        const newUrl = formUrlQuery({
          params,
          pathname,
          key: queryKey,
          value: searchQuery,
        });
        router.push(newUrl, { scroll: false });
        return;
      }

      if (pathname === route) {
        const newUrl = removeKeysFromUrlQuery({
          params,
          pathname,
          keysToRemove: [queryKey],
        });
        router.push(newUrl, { scroll: false });
      }
    }, 300);

    return () => clearTimeout(debounce);
  }, [searchQuery, pathname, route, router, searchParams, queryKey]);

  return (
    <label
      className={cn(
        "flex min-h-14 grow items-center gap-2 rounded-xl background-light800_darkgradient px-4",
        className,
      )}
    >
      <Search className="size-5 shrink-0 text-light-400" aria-hidden />
      <Input
        type="search"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        className="h-auto min-h-0 border-none bg-transparent px-0 py-0 paragraph-regular placeholder shadow-none no-focus ring-0 focus-visible:border-transparent focus-visible:ring-0 dark:bg-transparent"
      />
    </label>
  );
};

export default LocalSearch;
