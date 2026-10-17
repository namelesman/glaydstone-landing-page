import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import BpcLoasPage from "./BpcLoasPage";
import "./bpc-loas.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BPC/LOAS negado? Entenda o que fazer agora",
};

export default function Page() {
  return (
    <div className={`bpc-page ${fraunces.variable} ${inter.variable}`}>
      <BpcLoasPage />
    </div>
  );
}
