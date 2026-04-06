export default function Leads() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Leads</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
          + Add Lead
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {['New', 'In Progress', 'Converted'].map((stage) => (
          <div key={stage} className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
            <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">{stage}</h2>
            <p className="text-gray-400 text-sm text-center py-6">No leads in this stage.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
