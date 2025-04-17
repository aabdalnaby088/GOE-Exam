import { Provider } from "@/components/ui/provider"
import type { Metadata } from "next";
import {  Montserrat } from "next/font/google";
import "./globals.css";


const montserrat = Montserrat({
  weight: ['300','400','700'],
  subsets: ['latin']
})
export const metadata: Metadata = {
  title: "Goe Exam",
  description: "created by Ahmed mohamed as a part of Goe process",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html  lang="en" suppressHydrationWarning >
      <body
        className={`${montserrat.className} antialiased`}
      >
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
