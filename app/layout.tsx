import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VeeSave — Drive Smart | Save Smart",
  description: "Vehicle expense tracking for smart drivers, tradies and fleets.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}