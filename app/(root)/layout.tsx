import LeftSidebar from "@/components/navigation/LeftSidebar";
import Navbar from "@/components/navigation/navbar";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <Navbar />
      <div className="flex flex-1">
        <LeftSidebar />
        <section className="flex min-w-0 flex-1 flex-col px-6 pb-6 pt-6 max-md:pb-14 sm:px-14">
          {children}
        </section>
      </div>
    </div>
  );
}
