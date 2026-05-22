import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-42amps-projects.vercel.app"),
  title: "Aman R Khanchandani - Applied AI + Product Engineer",
  description:
    "Applied AI and product engineering portfolio for RAG, document intelligence, payout correctness, backend reliability, and full-stack product infrastructure.",
  icons: {
    icon: "/github-avatar.png",
  },
  openGraph: {
    title: "Aman R Khanchandani - Applied AI + Product Engineer",
    description:
      "Applied AI and product engineering portfolio for RAG, document intelligence, payout correctness, backend reliability, and full-stack product infrastructure.",
    images: ["/github-avatar.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman R Khanchandani - Applied AI + Product Engineer",
    description:
      "Applied AI and product engineering portfolio for RAG, document intelligence, payout correctness, backend reliability, and full-stack product infrastructure.",
    images: ["/github-avatar.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
