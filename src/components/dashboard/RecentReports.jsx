const reports = [
  { name: "loader.elf", status: "critical" },
  { name: "crackme.bin", status: "medium" },
  { name: "util.pe", status: "clean" },
];

export default function RecentReports() {
  return (
    <div className="bg-[#0d1117] p-4 rounded-xl border border-slate-800">
      <h2 className="text-white text-sm mb-4">Recent Reports</h2>

      <div className="space-y-2">
        {reports.map((r, i) => (
          <div key={i} className="flex justify-between text-sm">
            <span className="text-slate-300">{r.name}</span>
            <span className="text-slate-500">{r.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}