const data = [
  { name: "CFF", value: 72 },
  { name: "Packer", value: 55 },
  { name: "Anti-Debug", value: 33 },
];

export default function ThreatDistribution() {
  return (
    <div className="bg-[#0d1117] p-4 rounded-xl border border-slate-800">
      <h2 className="text-white text-sm mb-4">Threats</h2>

      <div className="space-y-2">
        {data.map((d, i) => (
          <div key={i}>
            <div className="flex justify-between text-xs text-slate-400">
              <span>{d.name}</span>
              <span>{d.value}%</span>
            </div>
            <div className="h-1 bg-slate-800 rounded">
              <div
                className="h-full bg-rose-500"
                style={{ width: `${d.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}