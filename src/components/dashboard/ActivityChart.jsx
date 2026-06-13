const data = [40, 65, 48, 90, 72, 55];

export default function ActivityChart() {
  return (
    <div className="bg-[#0d1117] p-4 rounded-xl border border-slate-800">
      <h2 className="text-white text-sm mb-4">Activity</h2>

      <div className="flex items-end gap-2 h-32">
        {data.map((v, i) => (
          <div
            key={i}
            className="bg-cyan-500 w-full rounded"
            style={{ height: `${v}%` }}
          />
        ))}
      </div>
    </div>
  );
}