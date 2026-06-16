import { useState } from "react";
import { FileCode2, ChevronRight, Search, ShieldAlert, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const REPORTS = [
  { id: 1, name: "loader_obf_v3.elf",  status: "critical", score: 91, arch: "x86_64", mode: "Agentic",  time: "2 min ago"  },
  { id: 2, name: "crackme_arm64.bin",  status: "medium",   score: 54, arch: "ARM64",  mode: "Enhanced", time: "18 min ago" },
  { id: 3, name: "util_patch.pe",       status: "clean",    score: 12, arch: "x86",    mode: "Standard", time: "1 hr ago"   },
  { id: 4, name: "dropper_cfflat.elf", status: "critical", score: 88, arch: "x86_64", mode: "Agentic",  time: "3 hr ago"   },
  { id: 5, name: "sandbox_test.bin",   status: "clean",    score: 5,  arch: "ARM32",  mode: "Standard", time: "Yesterday"  },
];

const statusMeta = {
  critical: { label: "Critical", cls: "bg-rose-500/15 text-rose-400 ring-rose-500/30",       Icon: XCircle       },
  medium:   { label: "Medium",   cls: "bg-amber-500/15 text-amber-400 ring-amber-500/30",    Icon: AlertTriangle },
  clean:    { label: "Clean",    cls: "bg-emerald-500/15 text-emerald-400 ring-emerald-500/30", Icon: CheckCircle2 },
};

const modeCls = {
  Agentic:  "bg-violet-500/20 text-violet-300",
  Enhanced: "bg-cyan-500/20 text-cyan-300",
  Standard: "bg-slate-500/20 text-slate-300",
};

const filters = ["all", "critical", "medium", "clean"];

export default function Reports() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filtered = REPORTS.filter((r) => {
    const matchFilter = filter === "all" || r.status === filter;
    const matchSearch = r.name.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <div className="min-h-screen bg-[#080c10] p-6 space-y-6">

      {/* Header */}
      <div className="rounded-xl bg-[#0d1117] ring-1 ring-slate-800 p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
            <ShieldAlert size={16} className="text-violet-400" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">Reports</h1>
            <p className="text-xs text-slate-400 mt-0.5">Binary analysis history & threat logs</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-white font-mono">{REPORTS.length}</p>
          <p className="text-xs text-slate-500">total reports</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <div className="relative w-full md:w-72">
          <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            placeholder="Search binary name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#0d1117] ring-1 ring-slate-800 pl-8 pr-3 py-2 rounded-lg text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-cyan-500/40"
          />
        </div>

        <div className="flex gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-all ring-1
                ${filter === f
                  ? "bg-cyan-500/10 ring-cyan-500/40 text-cyan-300"
                  : "ring-slate-800 text-slate-500 hover:ring-slate-600 hover:text-slate-300"
                }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* List */}
      <div className="flex flex-col gap-3">
        {filtered.length === 0 ? (
          <div className="rounded-xl bg-[#0d1117] ring-1 ring-slate-800 p-12 flex flex-col items-center gap-3">
            <FileCode2 size={28} className="text-slate-700" />
            <p className="text-slate-500 text-sm">No reports match your search</p>
          </div>
        ) : (
          filtered.map((r) => {
            const { label, cls, Icon } = statusMeta[r.status];
            const scoreColor =
              r.score > 75 ? "text-rose-400" :
              r.score > 40 ? "text-amber-400" :
              "text-emerald-400";

            return (
              <div
                key={r.id}
                onClick={() => navigate(`/report/${r.id}`)}
                className="bg-[#0d1117] ring-1 ring-slate-800 rounded-xl px-5 py-4 flex items-center gap-4 hover:ring-cyan-500/30 hover:bg-slate-800/20 transition-all cursor-pointer group"
              >
                {/* Icon */}
                <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
                  <FileCode2 size={15} className="text-slate-400" />
                </div>

                {/* Name + meta */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-slate-200 font-mono truncate group-hover:text-white transition-colors">{r.name}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{r.arch} · {r.time}</p>
                </div>

                {/* Mode */}
                <span className={`hidden sm:inline-flex text-[10px] font-semibold px-2 py-0.5 rounded-full ${modeCls[r.mode]}`}>
                  {r.mode}
                </span>

                {/* Score */}
                <div className="text-center min-w-[40px]">
                  <p className="text-[10px] text-slate-600">Score</p>
                  <p className={`text-sm font-bold font-mono ${scoreColor}`}>{r.score}</p>
                </div>

                {/* Status */}
                <span className={`hidden md:inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-1 rounded-full ring-1 ${cls}`}>
                  <Icon size={10} /> {label}
                </span>

                <ChevronRight size={14} className="text-slate-700 group-hover:text-slate-400 transition-colors shrink-0" />
              </div>
            );
          })
        )}
      </div>

    </div>
  );
}