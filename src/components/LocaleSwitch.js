"use client";

export default function LocaleSwitch({ locale }) {
  const nextLocale = locale === "ar" ? "en" : "ar";
  const label = locale === "ar" ? "English" : "العربية";

  const handleSwitch = () => {
    document.cookie = `locale=${nextLocale}; path=/; max-age=31536000`;
    window.location.reload();
  };

  return (
    <button
      type="button"
      onClick={handleSwitch}
      className="rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-50"
    >
      {label}
    </button>
  );
}
