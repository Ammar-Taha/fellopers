import {
  Briefcase,
  CircleHelp,
  Home,
  Star,
  Tag,
  Users,
  type LucideIcon,
} from "lucide-react";

import ROUTES from "@/constants/routes";

export type SidebarLink = {
  icon: LucideIcon;
  route: string;
  label: string;
};

export const SIDEBAR_LINKS: SidebarLink[] = [
  { icon: Home, route: ROUTES.HOME, label: "Home" },
  { icon: Star, route: ROUTES.COLLECTIONS, label: "Collections" },
  { icon: Briefcase, route: ROUTES.JOBS, label: "Find Jobs" },
  { icon: Tag, route: ROUTES.TAGS, label: "Tags" },
  { icon: Users, route: ROUTES.COMMUNITY, label: "Communities" },
  { icon: CircleHelp, route: ROUTES.ASK_QUESTION, label: "Ask a Question" },
];
