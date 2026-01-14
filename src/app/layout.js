import "./globals.css";
import { Cairo, Changa } from "next/font/google";
import { cookies } from "next/headers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDir, getLocaleFromCookies, getStrings } from "@/lib/i18n";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const changa = Changa({
  subsets: ["arabic"],
  weight: ["600", "700"],
  variable: "--font-display",
});

export const metadata = {
  title: "Product Playground | Demo-First Portfolio",
  description:
    "Interactive demo-first portfolio for a full-stack developer (Flutter + Node.js + MongoDB + Socket.io).",
};

export default async function RootLayout({ children }) {
  const locale = await getLocaleFromCookies(cookies());
  const dir = getDir(locale);
  const strings = getStrings(locale);

  return (
    <html lang={locale} dir={dir} className={`${cairo.variable} ${changa.variable}`}>
      <body className="min-h-screen bg-[radial-gradient(circle_at_top,_#dbeafe,_#ffffff_55%)] text-slate-900 antialiased">
        <div className="relative min-h-screen overflow-hidden">
          <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-sky-200/70 blur-3xl" />
          <div className="pointer-events-none absolute top-1/3 -left-16 h-72 w-72 rounded-full bg-blue-100/80 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-1/3 h-72 w-72 rounded-full bg-sky-100/70 blur-3xl" />
          <Header locale={locale} strings={strings} />
          <main className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-10 md:px-10">
            {children}
          </main>
          <Footer strings={strings} />
        </div>
      </body>
    </html>
  );
}
