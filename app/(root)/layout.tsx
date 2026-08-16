import Navbar from "@/components/navigation/navbar";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <Navbar />
      {children}
    </div>
  );
}
