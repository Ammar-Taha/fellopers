import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type GlobalSearchProps = {
  className?: string;
  placeholder?: string;
};

const GlobalSearch = ({
  className,
  placeholder = "Search anything globally",
}: GlobalSearchProps) => {
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
        className="h-auto min-h-0 border-none bg-transparent px-0 py-0 paragraph-regular placeholder shadow-none no-focus ring-0 focus-visible:border-transparent focus-visible:ring-0 dark:bg-transparent"
      />
    </label>
  );
};

export default GlobalSearch;
