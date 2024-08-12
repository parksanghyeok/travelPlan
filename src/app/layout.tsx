import React from "react";
import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./config/globals.css";
import Providers from "../components/layout/provider";
import Header from "../components/layout/header";

const notoSansKr = Noto_Sans_KR({
  weight: ["500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "여행 계획 - 나 계획없어 (TR.Plan) 근데 지도가 없는",
  description: "구글지도는 언제쯤 추가될까....",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSansKr.className} px-8 md:px-24 w-mo md:w-pc h-[100vh] m-auto`}>
        <Providers>
          <Header/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
