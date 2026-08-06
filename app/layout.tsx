import type { Metadata } from "next";
import Header from "./components/Header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hdshashank.dev"),
  title: "Shashank H D | Software Engineer",
  description:
    "Software engineer who learns quickly, works from fundamentals, and turns unfamiliar problems into useful software.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />

        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=t==='light'?'light':'dark'}catch(e){document.documentElement.dataset.theme='dark'}})()`,
          }}
        />
      </head>
      <body>
        <a
          className="fixed top-3 left-3 z-[100] -translate-y-[160%] bg-blue-solid px-3.5 py-2.5 font-mono text-[11px]/none font-bold tracking-[.08em] text-white uppercase transition-transform duration-[160ms] ease-out focus:translate-y-0"
          href="#main-content"
        >
          Skip to content
        </a>
        <Header />
        {children}
      </body>
    </html>
  );
}
