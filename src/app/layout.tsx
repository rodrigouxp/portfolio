import { ReactNode } from "react";
import type { Metadata } from "next";
import "../styles/global.css";
import "../styles/typography.css";
import "../styles/colors.css";

import Fonts from "./fonts";
import Nav from "../components/Nav/nav";

export const metadata: Metadata = {
  title: "Rodrigo | UX Designer",
  description:
    "Portfolio de Rodrigo Formigon, UX designer, biólogo e pesquisador.",
  generator: "Next.js",
  creator: "Rodrigo Formigon",

  openGraph: {
    title: "Rodrigo | UX Designer",
    description:
      "Portfolio de Rodrigo Formigon, UX designer, biólogo e pesquisador.",
    siteName: "Rodrigo | UX Designer",
    images: [
      {
        url: "https://uploads-ssl.webflow.com/646baa23a6a44e1ac5f64810/646c1757da75a69d73e76920_photo-p-800.png",
        width: 600,
        height: 600,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rodrigo | UX Designer",
    description:
      "Portfolio de Rodrigo Formigon, UX designer, biólogo e pesquisador.",
    creator: "Rodrigo Formigon",
    images: [
      "https://uploads-ssl.webflow.com/646baa23a6a44e1ac5f64810/646c1757da75a69d73e76920_photo-p-800.png",
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <Fonts />
      <body>
        <Nav />

        {children}
      </body>
    </html>
      
  );
}

