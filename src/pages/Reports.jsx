import { useState } from "react";

const REPORTS = [
  { id: 1, name: "loader_obf_v3.elf", status: "critical", score: 91, arch: "x86_64", time: "2 min ago" },
  { id: 2, name: "crackme_arm64.bin", status: "medium", score: 54, arch: "ARM64", time: "18 min ago" },
  { id: 3, name: "util_patch.pe", status: "clean", score: 12, arch: "x86", time: "1 hr ago" },
  { id: 4, name: "dropper_cfflat.elf", status: "critical", score: 88, arch: "x86_64", time: "3 hr ago" },
  { id: 5, name: "sandbox_test.bin", status: "clean", score: 5, arch: "ARM32", time: "Yesterday" },
];

export default function Reports() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = REPORTS.filter((r) => {
    const matchFilter = filter === "all" || r.status === filter;
    const matchSearch = r.name.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <div className="p-6 space-y-4">

      {/* HEADER */}
      <div>
        <h1 className="text-white text-lg font-bold">Reports</h1>
        <p className="text-slate-500 text-xs">Binary analysis history & threat logs</p>
      </div>

      {/* CONTROLS */}
      <div className="flex flex-col md:flex-row gap-2 md:items-center md:justify-between">

        <input
          placeholder="Search report..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-[#0d1117] border border-slate-800 px-3 py-2 rounded text-sm text-white w-full md:w-1/3"
        />

        <div className="flex gap-2">
          {["all", "critical", "medium", "clean"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded text-xs border transition
                ${filter === f
                  ? "bg-cyan-500/20 border-cyan-500 text-cyan-300"
                  : "border-slate-800 text-slate-400 hover:border-slate-600"
                }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* LIST */}
      <div className="grid gap-3">
        {filtered.map((r) => (
          <div
            key={r.id}
            className="bg-[#0d1117] border border-slate-800 rounded-xl p-4 flex justify-between items-center hover:border-cyan-500/40 transition"
          >

            {/* LEFT */}
            <div>
              <h2 className="text-white font-mono text-sm">{r.name}</h2>
              <p className="text-slate-500 text-xs">{r.arch} • {r.time}</p>
            </div>

            {/* MIDDLE */}
            <div className="text-center">
              <p className="text-xs text-slate-400">Score</p>
              <p className={`text-sm font-bold ${
                r.score > 75 ? "text-rose-400" :
                r.score > 40 ? "text-amber-400" :
                "text-emerald-400"
              }`}>
                {r.score}
              </p>
            </div>

            {/* RIGHT STATUS */}
            <div>
              <span className={`text-xs px-2 py-1 rounded border
                ${r.status === "critical"
                  ? "border-rose-500/30 text-rose-400"
                  : r.status === "medium"
                  ? "border-amber-500/30 text-amber-400"
                  : "border-emerald-500/30 text-emerald-400"
                }`}
              >
                {r.status}
              </span>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}