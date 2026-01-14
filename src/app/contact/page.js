import { cookies } from "next/headers";
import { getLocaleFromCookies, getStrings } from "@/lib/i18n";

export const metadata = {
  title: "Contact | Product Playground",
  description: "Book a quick demo or reach out directly.",
};

export default async function ContactPage() {
  const locale = await getLocaleFromCookies(cookies());
  const strings = getStrings(locale);

  const contacts = [
    {
      label: strings.contact.channels.whatsapp,
      value: "+20 1X XXX XXXX",
      href: "#",
    },
    {
      label: strings.contact.channels.linkedin,
      value: "linkedin.com/in/your-handle",
      href: "https://linkedin.com/in/your-handle",
    },
    {
      label: strings.contact.channels.email,
      value: "hello@example.com",
      href: "mailto:hello@example.com",
    },
  ];

  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-blue-100 bg-white/80 p-6 shadow-sm md:p-8">
        <p className="text-sm font-medium text-blue-700">
          {strings.contact.eyebrow}
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-900 font-[var(--font-display)]">
          {strings.contact.title}
        </h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          {strings.contact.body}
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {contacts.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="rounded-2xl border border-blue-100 bg-white/80 p-5 text-sm text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <p className="text-xs font-semibold text-blue-700">{item.label}</p>
            <p className="mt-2 font-medium text-slate-900">{item.value}</p>
            <p className="mt-2 text-xs text-slate-500">
              {strings.contact.placeholder}
            </p>
          </a>
        ))}
      </section>

      <section className="rounded-2xl border border-blue-100 bg-blue-50/60 p-6 text-sm text-slate-700">
        <h2 className="text-base font-semibold text-slate-900">
          {strings.contact.noteTitle}
        </h2>
        <p className="mt-2">{strings.contact.noteBody}</p>
      </section>
    </div>
  );
}
