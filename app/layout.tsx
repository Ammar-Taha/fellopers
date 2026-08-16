import type { Metadata } from "next";
import { Geist_Mono, Inter, Space_Grotesk, Geist } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import "./globals.css";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Fellopers",
    template: "%s | Fellopers",
  },
  description:
    "A community for developers to ask questions, share answers, and grow together.",
  applicationName: "Fellopers",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full", "antialiased", inter.variable, spaceGrotesk.variable, geistMono.variable, "font-sans", geist.variable)}
    >
      <body className="flex min-h-full flex-col font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
