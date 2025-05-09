import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AssistantBubble from "@/components/AssistantBubble";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-noto",
});

export const metadata: Metadata = {
  title: "A Cosmetic Story",
  description: "A Cosmetic Story",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${notoSansKr.variable} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1 pt-24">{children}</main>
        <Footer />
        <AssistantBubble />
      </body>
    </html>
  );
}
