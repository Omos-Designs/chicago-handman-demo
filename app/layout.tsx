import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Chicago Handyman Services | Professional Home Repairs & Improvements",
  description: "Professional handyman services in Chicago. Quality home repairs, renovations, and improvements. Call us today for a free quote!",
  keywords: "handyman, Chicago, home repairs, renovations, plumbing, electrical, carpentry",
  // icons: {
  //   icon: [
  //     { url: "/favicon.ico", sizes: "any" },
  //   ],
  //   shortcut: "/favicon.ico",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
        <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
}
