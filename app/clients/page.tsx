import Link from "next/link";

export default function ClientsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Clients</h2>
          <p className="text-sm text-gray-500 mt-1">
            Manage your publishing clients.
          </p>
        </div>
        <Link
          href="/clients/new"
          className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors"
        >
          + Add Client
        </Link>
      </div>
      <div className="rounded-xl border border-dashed border-gray-300 bg-white p-12 text-center text-gray-400">
        <p className="text-sm">No clients yet. Add your first client to get started.</p>
      </div>
    </div>
  );
}
