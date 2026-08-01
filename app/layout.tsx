import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hdshashank.dev"),
  title: "Shashank H D — Software Engineer",
  description:
    "Software engineer and Information Science graduate building thoughtful web experiences and dependable systems.",
  openGraph: {
    title: "Shashank H D — Software Engineer",
    description:
      "Software engineer and Information Science graduate building thoughtful web experiences and dependable systems.",
    url: "https://hdshashank.dev",
    siteName: "Shashank H D",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
