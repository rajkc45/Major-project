import { useState } from "react";
import { FileCode2, ChevronRight, Search, Shield, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const REPORTS = [
  { id: 1, name: "loader_obf_v3.elf",  status: "critical", score: 91, arch: "x86_64", mode: "Agentic",  time: "2 min ago"  },
  { id: 2, name: "crackme_arm64.bin",  status: "medium",   score: 54, arch: "ARM64",  mode: "Enhanced", time: "18 min ago" },
  { id: 3, name: "util_patch.pe",       status: "clean",    score: 12, arch: "x86",    mode: "Standard", time: "1 hr ago"   },
  { id: 4, name: "dropper_cfflat.elf", status: "critical", score: 88, arch: "x86_64", mode: "Agentic",  time: "3 hr ago"   },
  { id: 5, name: "sandbox_test.bin",   status: "clean",    score: 5,  arch: "ARM32",  mode: "Standard", time: "Yesterday"  },
];

const statusMeta = {
  critical: { label: "Critical", cls: "bg-[#fce8e6] text-[#e8635a]",       Icon: XCircle       },
  medium:   { label: "Medium",   cls: "bg-[#faf0e0] text-[#d4944a]",       Icon: AlertTriangle },
  clean:    { label: "Clean",    cls: "bg-[#e4f2f2] text-[#4a9e9e]",       Icon: CheckCircle2  },
};

const modeCls = {
  Agentic:  "bg-[#f0edf7] text-[#9b8ec4]",
  Enhanced: "bg-[#e4f2f2] text-[#4a9e9e]",
  Standard: "bg-[#e5e1d8] text-[#787268]",
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
    <div className="space-y-6">

      {/* Header */}
      <div className="rounded-2xl bg-[#f0ede7] border border-[#d1ccc1] p-6 flex items-center justify-between blob-deco">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#f0edf7] flex items-center justify-center">
            <Shield size={16} className="text-[#9b8ec4]" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-[#2b2824]">Reports</h1>
            <p className="text-sm text-[#787268] mt-0.5">Binary analysis history & threat logs</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-[#2b2824] tracking-tight">{REPORTS.length}</p>
          <p className="text-xs text-[#aba498]">total reports</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <div className="relative w-full md:w-72">
          <Search size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#aba498]" />
          <input
            placeholder="Search binary name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#f0ede7] border border-[#d1ccc1] pl-9 pr-3.5 py-2.5 rounded-xl text-sm text-[#2b2824] placeholder-[#aba498] focus:outline-none focus:border-[#e8635a]/40 transition-all"
          />
        </div>

        <div className="flex gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium capitalize transition-all border
                ${filter === f
                  ? "bg-[#fce8e6] border-[#e8635a]/30 text-[#e8635a]"
                  : "border-[#d1ccc1] text-[#787268] hover:bg-[#e5e1d8]"
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
          <div className="rounded-2xl bg-[#f0ede7] border border-[#d1ccc1] p-12 flex flex-col items-center gap-3">
            <FileCode2 size={28} className="text-[#aba498]" />
            <p className="text-[#787268] text-sm">No reports match your search</p>
          </div>
        ) : (
          filtered.map((r, idx) => {
            const { label, cls, Icon } = statusMeta[r.status];
            const scoreColor =
              r.score > 75 ? "text-[#e8635a]" :
              r.score > 40 ? "text-[#d4944a]" :
              "text-[#4a9e9e]";

            return (
              <div
                key={r.id}
                onClick={() => navigate(`/report/${r.id}`)}
                className="bg-[#f0ede7] border border-[#d1ccc1] rounded-2xl px-5 py-4 flex items-center gap-4 hover:border-[#c4bfb4] hover:shadow-sm transition-all duration-200 cursor-pointer group animate-pop-in"
                style={{ animationDelay: `${idx * 0.04}s` }}
              >
                <div className="w-9 h-9 rounded-xl bg-[#e5e1d8] flex items-center justify-center shrink-0">
                  <FileCode2 size={15} className="text-[#787268]" />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm text-[#2b2824] font-mono truncate">{r.name}</p>
                  <p className="text-xs text-[#aba498] mt-0.5">{r.arch} · {r.time}</p>
                </div>

                <span className={`hidden sm:inline-flex text-[10px] font-semibold px-2 py-0.5 rounded-full ${modeCls[r.mode]}`}>
                  {r.mode}
                </span>

                <div className="text-center min-w-[40px]">
                  <p className="text-[10px] text-[#aba498]">Score</p>
                  <p className={`text-sm font-bold font-mono ${scoreColor}`}>{r.score}</p>
                </div>

                <span className={`hidden md:inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-1 rounded-full ${cls}`}>
                  <Icon size={10} /> {label}
                </span>

                <ChevronRight size={14} className="text-[#aba498] shrink-0" />
              </div>
            );
          })
        )}
      </div>

    </div>
  );
}
