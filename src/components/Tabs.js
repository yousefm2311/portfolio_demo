import Link from "next/link";

export default function Tabs({ currentTab, basePath, strings }) {
  const tabs = [
    { key: "overview", label: strings.tabs.overview },
    { key: "demo", label: strings.tabs.demo },
    { key: "under-the-hood", label: strings.tabs.underTheHood },
    { key: "api", label: strings.tabs.api },
  ];

  const activeTab = tabs.some((tab) => tab.key === currentTab)
    ? currentTab
    : "overview";

  return (
    <div className="flex flex-wrap gap-2 border-b border-blue-100 pb-3">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.key;
        return (
          <Link
            key={tab.key}
            href={`${basePath}?tab=${tab.key}`}
            className={`rounded-full px-4 py-1.5 text-sm transition ${
              isActive
                ? "bg-blue-600 text-white"
                : "border border-blue-100 bg-white text-slate-600 hover:border-blue-200"
            }`}
            aria-current={isActive ? "page" : undefined}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}
