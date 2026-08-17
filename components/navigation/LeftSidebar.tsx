import { auth } from "@/auth";

import NavLinks from "@/components/navigation/NavLinks";
import SidebarAuth from "@/components/navigation/SidebarAuth";

const LeftSidebar = async () => {
  const session = await auth();

  return (
    <aside className="custom-scrollbar sticky top-0 flex h-[calc(100dvh-5.5rem)] w-fit shrink-0 flex-col justify-between overflow-y-auto border-r light-border background-light900_dark200 p-6 max-md:hidden nav:w-[266px]">
      <NavLinks />
      <SidebarAuth isLoggedIn={Boolean(session?.user)} compact />
    </aside>
  );
};

export default LeftSidebar;
