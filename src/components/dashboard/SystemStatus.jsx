const systems = [
  { name: "LLM API", status: "online" },
  { name: "MongoDB", status: "online" },
  { name: "Engine", status: "degraded" },
];

export default function SystemStatus() {
  return (
    <div className="bg-[#0d1117] p-4 rounded-xl border border-slate-800">
      <h2 className="text-white text-sm mb-4">System</h2>

      <div className="space-y-2">
        {systems.map((s, i) => (
          <div key={i} className="flex justify-between text-xs">
            <span className="text-slate-300">{s.name}</span>
            <span className="text-slate-500">{s.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}