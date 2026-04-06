import Link from "next/link";

const stats = [
  { label: "Total Clients", value: "–", href: "/clients", color: "bg-indigo-50 text-indigo-700" },
  { label: "Active Leads", value: "–", href: "/leads", color: "bg-emerald-50 text-emerald-700" },
  { label: "Open Invoices", value: "–", href: "/invoices", color: "bg-amber-50 text-amber-700" },
  { label: "Revenue (MTD)", value: "–", href: "/invoices", color: "bg-sky-50 text-sky-700" },
];

const quickLinks = [
  { label: "Add Client", href: "/clients/new" },
  { label: "New Lead", href: "/leads/new" },
  { label: "Create Invoice", href: "/invoices/new" },
];

export default function DashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
        <p className="text-sm text-gray-500 mt-1">
          Welcome back! Here's a summary of your publishing business.
        </p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className={`rounded-xl p-6 flex flex-col gap-2 shadow-sm border border-gray-100 hover:shadow-md transition-shadow ${stat.color}`}
          >
            <span className="text-3xl font-bold">{stat.value}</span>
            <span className="text-sm font-medium">{stat.label}</span>
          </Link>
        ))}
      </div>

      {/* Quick actions */}
      <div className="mb-8">
        <h3 className="text-base font-semibold text-gray-700 mb-3">
          Quick Actions
        </h3>
        <div className="flex flex-wrap gap-3">
          {quickLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Getting started callout */}
      <div className="rounded-xl border border-dashed border-gray-300 bg-white p-6 text-center text-gray-400">
        <p className="text-sm">
          Connect your database and start adding clients, leads, and invoices to
          see data here.
        </p>
      </div>
    </div>
  );
}
