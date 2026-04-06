export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Dashboard</h1>
      <p className="text-gray-500">Welcome to the Ink Fetish Publications internal management tool.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {[
          { label: 'Total Clients', value: '—' },
          { label: 'Active Leads', value: '—' },
          { label: 'Invoices Issued', value: '—' },
          { label: 'Revenue (MTD)', value: '—' },
        ].map((card) => (
          <div key={card.label} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
            <p className="text-sm text-gray-500">{card.label}</p>
            <p className="text-3xl font-semibold text-gray-800 mt-1">{card.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
