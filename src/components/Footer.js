import Link from "next/link";

export default function Footer({ strings }) {
  return (
    <footer className="border-t border-blue-100 bg-white/70">
      <div className="mx-auto w-full max-w-6xl px-5 py-10 md:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row">
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-slate-900 font-[var(--font-display)]">
              {strings.header.title}
            </h3>
            <p className="text-sm text-slate-600">{strings.footer.description}</p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-slate-600">
            <Link href="/projects" className="hover:text-blue-700">
              {strings.nav.projects}
            </Link>
            <Link href="/about" className="hover:text-blue-700">
              {strings.nav.about}
            </Link>
            <Link href="/status" className="hover:text-blue-700">
              {strings.nav.status}
            </Link>
            <Link href="/studio" className="hover:text-blue-700">
              {strings.nav.studio}
            </Link>
            <Link href="/contact" className="hover:text-blue-700">
              {strings.nav.contact}
            </Link>
          </div>
        </div>
        <p className="mt-6 text-xs text-slate-500">{strings.footer.note}</p>
      </div>
    </footer>
  );
}
