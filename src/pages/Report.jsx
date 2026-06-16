import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, FileCode2, ShieldAlert, Brain, Clock, Cpu, AlertTriangle, CheckCircle2, XCircle, Terminal } from "lucide-react";

const REPORTS = [
  { id: 1, name: "loader_obf_v3.elf",  status: "critical", score: 91, arch: "x86_64", mode: "Agentic",  time: "2 min ago",  size: "124 KB" },
  { id: 2, name: "crackme_arm64.bin",  status: "medium",   score: 54, arch: "ARM64",  mode: "Enhanced", time: "18 min ago", size: "88 KB"  },
  { id: 3, name: "util_patch.pe",       status: "clean",    score: 12, arch: "x86",    mode: "Standard", time: "1 hr ago",   size: "56 KB"  },
  { id: 4, name: "dropper_cfflat.elf", status: "critical", score: 88, arch: "x86_64", mode: "Agentic",  time: "3 hr ago",   size: "210 KB" },
  { id: 5, name: "sandbox_test.bin",   status: "clean",    score: 5,  arch: "ARM32",  mode: "Standard", time: "Yesterday",  size: "32 KB"  },
];

const statusMeta = {
  critical: { label: "Critical", cls: "bg-rose-500/15 text-rose-400 ring-rose-500/30",          Icon: XCircle       },
  medium:   { label: "Medium",   cls: "bg-amber-500/15 text-amber-400 ring-amber-500/30",       Icon: AlertTriangle },
  clean:    { label: "Clean",    cls: "bg-emerald-500/15 text-emerald-400 ring-emerald-500/30", Icon: CheckCircle2  },
};

const modeCls = {
  Agentic:  "bg-violet-500/20 text-violet-300",
  Enhanced: "bg-cyan-500/20 text-cyan-300",
  Standard: "bg-slate-500/20 text-slate-300",
};

export default function Report() {
  const { id } = useParams();
  const navigate = useNavigate();
  const report = REPORTS.find((r) => r.id === parseInt(id));

  if (!report) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-3">
          <FileCode2 size={32} className="text-slate-700 mx-auto" />
          <p className="text-slate-400 text-sm">Report not found</p>
          <button
            onClick={() => navigate("/reports")}
            className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            ← Back to reports
          </button>
        </div>
      </div>
    );
  }

  const { label, cls, Icon } = statusMeta[report.status];
  const scoreColor =
    report.score >= 75 ? "text-rose-400" :
    report.score >= 40 ? "text-amber-400" :
    "text-emerald-400";

  return (
    <div className="min-h-screen p-6 space-y-6">

      {/* Back button */}
      <button
        onClick={() => navigate("/reports")}
        className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-300 transition-colors"
      >
        <ArrowLeft size={14} /> Back to Reports
      </button>

      {/* Header */}
      <div className="rounded-xl bg-[#0d1117] ring-1 ring-slate-800 p-6 flex items-start justify-between card-glow card-glow-cyan">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 ring-1 ring-slate-700/50 flex items-center justify-center">
            <FileCode2 size={18} className="text-slate-400" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white font-mono">{report.name}</h1>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-xs text-slate-500">{report.arch}</span>
              <span className="text-slate-700">·</span>
              <span className="text-xs text-slate-500">{report.size}</span>
              <span className="text-slate-700">·</span>
              <span className="text-xs text-slate-500">{report.time}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ring-1 ${modeCls[report.mode]}`}>
            {report.mode}
          </span>
          <span className={`flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full ring-1 ${cls}`}>
            <Icon size={11} /> {label}
          </span>
        </div>
      </div>

      {/* Score + Meta */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 stagger">
        <div className="rounded-xl bg-[#0d1117] ring-1 ring-slate-800 p-5 flex flex-col gap-2 card-glow card-glow-rose">
          <div className="flex items-center gap-2">
            <ShieldAlert size={13} className="text-rose-400" />
            <p className="text-xs text-slate-500">Threat Score</p>
          </div>
          <p className={`text-3xl font-bold font-mono tracking-tight ${scoreColor}`}>{report.score}</p>
          <p className="text-[10px] text-slate-600">out of 100</p>
        </div>

        <div className="rounded-xl bg-[#0d1117] ring-1 ring-slate-800 p-5 flex flex-col gap-2 card-glow card-glow-cyan">
          <div className="flex items-center gap-2">
            <Cpu size={13} className="text-cyan-400" />
            <p className="text-xs text-slate-500">Architecture</p>
          </div>
          <p className="text-xl font-bold font-mono text-white tracking-tight">{report.arch}</p>
          <p className="text-[10px] text-slate-600">target platform</p>
        </div>

        <div className="rounded-xl bg-[#0d1117] ring-1 ring-slate-800 p-5 flex flex-col gap-2 card-glow card-glow-violet">
          <div className="flex items-center gap-2">
            <Brain size={13} className="text-violet-400" />
            <p className="text-xs text-slate-500">Analysis Mode</p>
          </div>
          <p className="text-xl font-bold font-mono text-white tracking-tight">{report.mode}</p>
          <p className="text-[10px] text-slate-600">pipeline used</p>
        </div>

        <div className="rounded-xl bg-[#0d1117] ring-1 ring-slate-800 p-5 flex flex-col gap-2 card-glow card-glow-amber">
          <div className="flex items-center gap-2">
            <Clock size={13} className="text-amber-400" />
            <p className="text-xs text-slate-500">Analysed</p>
          </div>
          <p className="text-xl font-bold font-mono text-white tracking-tight">{report.time}</p>
          <p className="text-[10px] text-slate-600">time ago</p>
        </div>
      </div>

      {/* Assembly output */}
      <div className="rounded-xl bg-[#0d1117] ring-1 ring-slate-800 overflow-hidden card-glow card-glow-cyan">
        <div className="flex items-center gap-2 px-5 py-3 border-b border-slate-800">
          <Terminal size={13} className="text-cyan-400" />
          <h2 className="text-sm font-semibold text-white">Disassembly Output</h2>
          <span className="ml-auto text-[10px] text-slate-600 bg-slate-800 px-2 py-0.5 rounded font-mono">awaiting backend</span>
        </div>
        <div className="p-5 font-mono text-xs text-slate-600 space-y-1.5 select-none">
          <p><span className="text-slate-700">0x00401000</span>  <span className="text-cyan-800">push</span>   rbp</p>
          <p><span className="text-slate-700">0x00401001</span>  <span className="text-cyan-800">mov</span>    rbp, rsp</p>
          <p><span className="text-slate-700">0x00401004</span>  <span className="text-cyan-800">sub</span>    rsp, 0x20</p>
          <p><span className="text-slate-700">0x00401008</span>  <span className="text-cyan-800">call</span>   <span className="text-violet-800">0x00401080</span></p>
          <p><span className="text-slate-700">0x0040100d</span>  <span className="text-cyan-800">xor</span>    eax, eax</p>
          <p className="text-slate-700 italic pt-2">── real output will appear here once backend is connected ──</p>
        </div>
      </div>

      {/* AI Analysis */}
      <div className="rounded-xl bg-[#0d1117] ring-1 ring-slate-800 overflow-hidden card-glow card-glow-violet">
        <div className="flex items-center gap-2 px-5 py-3 border-b border-slate-800">
          <Brain size={13} className="text-violet-400" />
          <h2 className="text-sm font-semibold text-white">AI De-obfuscation Report</h2>
          <span className="ml-auto text-[10px] text-slate-600 bg-slate-800 px-2 py-0.5 rounded font-mono">awaiting backend</span>
        </div>
        <div className="p-5 space-y-3">
          {["Obfuscation technique detected", "Control flow analysis", "String decryption", "Recommended action"].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-gradient-to-r from-violet-600 to-violet-400 rounded-full animate-pulse" />
              </div>
              <span className="text-[10px] text-slate-700 shrink-0 w-40">{item}</span>
            </div>
          ))}
          <p className="text-[10px] text-slate-700 italic pt-2">── LLM report will appear here once n8n pipeline is connected ──</p>
        </div>
      </div>

    </div>
  );
}
