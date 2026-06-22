import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, FileCode2, Shield, Brain, Clock, Cpu, AlertTriangle, CheckCircle2, XCircle, Terminal, Sparkles } from "lucide-react";

const REPORTS = [
  { id: 1, name: "loader_obf_v3.elf",  status: "critical", score: 91, arch: "x86_64", mode: "Agentic",  time: "2 min ago",  size: "124 KB" },
  { id: 2, name: "crackme_arm64.bin",  status: "medium",   score: 54, arch: "ARM64",  mode: "Enhanced", time: "18 min ago", size: "88 KB"  },
  { id: 3, name: "util_patch.pe",       status: "clean",    score: 12, arch: "x86",    mode: "Standard", time: "1 hr ago",   size: "56 KB"  },
  { id: 4, name: "dropper_cfflat.elf", status: "critical", score: 88, arch: "x86_64", mode: "Agentic",  time: "3 hr ago",   size: "210 KB" },
  { id: 5, name: "sandbox_test.bin",   status: "clean",    score: 5,  arch: "ARM32",  mode: "Standard", time: "Yesterday",  size: "32 KB"  },
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

export default function Report() {
  const { id } = useParams();
  const navigate = useNavigate();
  const report = REPORTS.find((r) => r.id === parseInt(id));

  if (!report) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center space-y-3">
          <FileCode2 size={32} className="text-[#aba498] mx-auto" />
          <p className="text-[#787268] text-sm">Report not found</p>
          <button
            onClick={() => navigate("/reports")}
            className="text-xs text-[#e8635a] hover:text-[#d4944a] transition-colors"
          >
            ← Back to reports
          </button>
        </div>
      </div>
    );
  }

  const { label, cls, Icon } = statusMeta[report.status];
  const scoreColor =
    report.score >= 75 ? "text-[#e8635a]" :
    report.score >= 40 ? "text-[#d4944a]" :
    "text-[#4a9e9e]";

  return (
    <div className="space-y-6">

      {/* Back button */}
      <button
        onClick={() => navigate("/reports")}
        className="flex items-center gap-2 text-sm text-[#787268] hover:text-[#e8635a] transition-colors"
      >
        <ArrowLeft size={14} /> Back to Reports
      </button>

      {/* Header */}
      <div className="rounded-2xl bg-[#f0ede7] border border-[#d1ccc1] p-6 flex items-start justify-between blob-deco">
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-[#e5e1d8] flex items-center justify-center">
            <FileCode2 size={18} className="text-[#787268]" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-[#2b2824] font-mono">{report.name}</h1>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-xs text-[#787268]">{report.arch}</span>
              <span className="text-[#aba498]">·</span>
              <span className="text-xs text-[#787268]">{report.size}</span>
              <span className="text-[#aba498]">·</span>
              <span className="text-xs text-[#787268]">{report.time}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${modeCls[report.mode]}`}>
            {report.mode}
          </span>
          <span className={`flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full ${cls}`}>
            <Icon size={11} /> {label}
          </span>
        </div>
      </div>

      {/* Score + Meta */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 stagger">
        <div className="rounded-2xl bg-[#f0ede7] border border-[#d1ccc1] p-6">
          <div className="flex items-center gap-2 mb-3">
            <Shield size={13} className="text-[#e8635a]" />
            <p className="text-xs text-[#787268]">Threat Score</p>
          </div>
          <p className={`text-3xl font-bold tracking-tight ${scoreColor}`}>{report.score}</p>
          <p className="text-xs text-[#aba498] mt-1">out of 100</p>
        </div>

        <div className="rounded-2xl bg-[#f0ede7] border border-[#d1ccc1] p-6">
          <div className="flex items-center gap-2 mb-3">
            <Cpu size={13} className="text-[#4a9e9e]" />
            <p className="text-xs text-[#787268]">Architecture</p>
          </div>
          <p className="text-xl font-bold text-[#2b2824] tracking-tight">{report.arch}</p>
          <p className="text-xs text-[#aba498] mt-1">target platform</p>
        </div>

        <div className="rounded-2xl bg-[#f0ede7] border border-[#d1ccc1] p-6">
          <div className="flex items-center gap-2 mb-3">
            <Brain size={13} className="text-[#9b8ec4]" />
            <p className="text-xs text-[#787268]">Analysis Mode</p>
          </div>
          <p className="text-xl font-bold text-[#2b2824] tracking-tight">{report.mode}</p>
          <p className="text-xs text-[#aba498] mt-1">pipeline used</p>
        </div>

        <div className="rounded-2xl bg-[#f0ede7] border border-[#d1ccc1] p-6">
          <div className="flex items-center gap-2 mb-3">
            <Clock size={13} className="text-[#d4944a]" />
            <p className="text-xs text-[#787268]">Analysed</p>
          </div>
          <p className="text-xl font-bold text-[#2b2824] tracking-tight">{report.time}</p>
          <p className="text-xs text-[#aba498] mt-1">time ago</p>
        </div>
      </div>

      {/* Assembly output */}
      <div className="rounded-2xl bg-[#f0ede7] border border-[#d1ccc1] overflow-hidden">
        <div className="flex items-center gap-2 px-6 py-4 border-b border-[#d1ccc1]">
          <Terminal size={13} className="text-[#4a9e9e]" />
          <h2 className="text-sm font-semibold text-[#2b2824]">Disassembly Output</h2>
          <span className="ml-auto text-[10px] text-[#aba498] bg-[#e5e1d8] px-2 py-0.5 rounded-lg font-mono">awaiting backend</span>
        </div>
        <div className="p-6 font-mono text-xs text-[#787268] space-y-1.5 select-none">
          <p><span className="text-[#aba498]">0x00401000</span>  <span className="text-[#4a9e9e]">push</span>   rbp</p>
          <p><span className="text-[#aba498]">0x00401001</span>  <span className="text-[#4a9e9e]">mov</span>    rbp, rsp</p>
          <p><span className="text-[#aba498]">0x00401004</span>  <span className="text-[#4a9e9e]">sub</span>    rsp, 0x20</p>
          <p><span className="text-[#aba498]">0x00401008</span>  <span className="text-[#4a9e9e]">call</span>   <span className="text-[#9b8ec4]">0x00401080</span></p>
          <p><span className="text-[#aba498]">0x0040100d</span>  <span className="text-[#4a9e9e]">xor</span>    eax, eax</p>
          <p className="text-[#aba498] italic pt-2">── real output will appear here once backend is connected ──</p>
        </div>
      </div>

      {/* AI Analysis */}
      <div className="rounded-2xl bg-[#f0ede7] border border-[#d1ccc1] overflow-hidden">
        <div className="flex items-center gap-2 px-6 py-4 border-b border-[#d1ccc1]">
          <Brain size={13} className="text-[#9b8ec4]" />
          <h2 className="text-sm font-semibold text-[#2b2824]">AI De-obfuscation Report</h2>
          <span className="ml-auto text-[10px] text-[#aba498] bg-[#e5e1d8] px-2 py-0.5 rounded-lg font-mono">awaiting backend</span>
        </div>
        <div className="p-6 space-y-3">
          {["Obfuscation technique detected", "Control flow analysis", "String decryption", "Recommended action"].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <div className="w-full h-3 bg-[#e5e1d8] rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-gradient-to-r from-[#9b8ec4] to-[#b8add4] rounded-full" />
              </div>
              <span className="text-[10px] text-[#aba498] shrink-0 w-40">{item}</span>
            </div>
          ))}
          <p className="text-[10px] text-[#aba498] italic pt-2">── LLM report will appear here once n8n pipeline is connected ──</p>
        </div>
      </div>

    </div>
  );
}
