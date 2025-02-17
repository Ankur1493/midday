import { DevMessage } from "@/components/dev-message";
import "@/styles/globals.css";
import { LogSnagProvider } from "@midday/events/client";
import "@midday/ui/globals.css";
import { cn } from "@midday/ui/utils";
import { Analytics } from "@vercel/analytics/react";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import type { ReactElement } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://midday.ai"),
  title: "Midday | Run your business smarter",
  description:
    "Midday provides you with greater insight into your business and automates the boring tasks, allowing you to focus on what you love to do instead.",
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)" },
    { media: "(prefers-color-scheme: dark)" },
  ],
};

export default function Layout({
  children,
  params: { locale = "en" },
}: {
  children: ReactElement;
  params: { locale: string };
}) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <LogSnagProvider
          token={process.env.NEXT_PUBLIC_LOGSNAG_TOKEN!}
          project={process.env.NEXT_PUBLIC_LOGSNAG_PROJECT!}
          disableTracking={Boolean(process.env.NEXT_PUBLIC_LOGSNAG_DISABLED!)}
        />
      </head>
      <body
        className={cn(
          `${GeistSans.variable} ${GeistMono.variable}`,
          "bg-[#F6F6F3] dark:bg-[#0C0C0C] overflow-x-hidden"
        )}
      >
        {children}
        <Analytics />
        <DevMessage />
      </body>
    </html>
  );
}
