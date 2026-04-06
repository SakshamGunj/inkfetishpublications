import Link from "next/link";

export default function InvoicesPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Invoices</h2>
          <p className="text-sm text-gray-500 mt-1">
            Create and manage invoices for your clients.
          </p>
        </div>
        <Link
          href="/invoices/new"
          className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors"
        >
          + Create Invoice
        </Link>
      </div>
      <div className="rounded-xl border border-dashed border-gray-300 bg-white p-12 text-center text-gray-400">
        <p className="text-sm">No invoices yet. Create your first invoice to get started.</p>
      </div>
    </div>
  );
}
