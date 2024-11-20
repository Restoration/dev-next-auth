import "./globals.css";
import React from "react";

export const metadata = {
  title: "My Next.js App",
  description: "An example app using the App Router with next-auth.",
};

export default async function RootLayout({
  children,

}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
