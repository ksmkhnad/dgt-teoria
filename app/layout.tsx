import type { Metadata, Viewport } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "./providers";
import Nav from "@/components/Nav";

const sans = Manrope({
  subsets: ["latin", "latin-ext", "cyrillic"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

const mono = JetBrains_Mono({
  subsets: ["latin", "latin-ext", "cyrillic"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "DGT Teoría",
  description: "Practice for the Spanish DGT driving theory exam (EN/ES/RU).",
  manifest: "/manifest.json",
  icons: [{ rel: "icon", url: "/icon.svg" }],
};

export const viewport: Viewport = {
  themeColor: "#DC2626",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${sans.variable} ${mono.variable}`}
    >
      <body>
        <I18nProvider>
          <div className="min-h-screen flex flex-col">
            <Nav />
            <main className="flex-1 mx-auto w-full max-w-3xl px-5 py-8">{children}</main>
          </div>
        </I18nProvider>
      </body>
    </html>
  );
}
