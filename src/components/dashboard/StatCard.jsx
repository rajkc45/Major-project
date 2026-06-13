export default function StatCard({ label, value }) {
  return (
    <div className="bg-[#0d1117] p-4 rounded-xl border border-slate-800">
      <p className="text-slate-400 text-xs">{label}</p>
      <h2 className="text-white text-xl font-bold">{value}</h2>
    </div>
  );
}