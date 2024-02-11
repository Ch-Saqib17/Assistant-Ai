import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Chat from "@/Components/Chat";
import Providers from "@/Components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ai Buddy",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <Chat />
          {children}
        </body>
      </Providers>
    </html>
  );
}
