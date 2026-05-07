import type { Metadata } from "next";
import { Nunito, Fredoka, Caveat } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "600", "700", "800", "900"],
});

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  weight: ["400", "500", "600", "700"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "Baraka Box - Share the Good Stuff!",
  description:
    "A community-driven initiative by Emmanuel Baptist Church, Nairobi. Donate, receive, or return baby items to help families in need.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${fredoka.variable} ${caveat.variable} bg-[#FFF8F0]`}
    >
      <body>{children}</body>
    </html>
  );
}
