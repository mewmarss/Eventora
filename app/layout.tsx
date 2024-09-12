import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eventora - Where Events and People Meet",
  description:
    "Discover and manage events effortlessly with a platform designed for seamless planning and connection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
      <Toaster richColors />
    </html>
  );
}
