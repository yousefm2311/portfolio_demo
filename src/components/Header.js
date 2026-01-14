import Link from "next/link";
import LocaleSwitch from "./LocaleSwitch";

export default function Header({ locale, strings }) {
  const navLinks = [
    { href: "/", label: strings.nav.home },
    { href: "/projects", label: strings.nav.projects },
    { href: "/about", label: strings.nav.about },
    { href: "/status", label: strings.nav.status },
    { href: "/studio", label: strings.nav.studio },
  ];

  return (
    <header className="relative mx-auto w-full max-w-6xl px-5 pt-6 md:px-10">
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-blue-100 bg-white/80 px-4 py-3 shadow-sm backdrop-blur">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
            PP
          </span>
          <div>
            <p className="text-sm font-semibold text-slate-900 font-[var(--font-display)]">
              {strings.header.title}
            </p>
            <p className="text-xs text-slate-500">{strings.header.subtitle}</p>
          </div>
        </Link>

        <nav className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1 transition hover:bg-blue-50 hover:text-blue-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LocaleSwitch locale={locale} />
          <Link
            href="/contact"
            className="rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-700"
          >
            {strings.header.cta}
          </Link>
        </div>
      </div>
    </header>
  );
}
