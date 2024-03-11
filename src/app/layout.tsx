import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const inter = Kanit({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ['latin'] });

export const metadata: Metadata = {
  title: "SUPERDAO",
  description: "The easyest way to start a DAO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
