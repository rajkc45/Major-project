import { useState } from "react";
import {
  FileCode2, Activity, Clock, ChevronRight,
  Cpu, Brain, Zap, TrendingUp, AlertTriangle, CheckCircle2,
  XCircle, BarChart3, Terminal, Circle, Shield
} from "lucide-react";

const STATS = [
  { label: "Binaries Analysed", value: "1,284", delta: "+12 this week",      icon: FileCode2,   accent: "coral"   },
  { label: "Threats Detected",  value: "347",   delta: "27% of total",       icon: Shield, accent: "amber"   },
  { label: "Avg. Analysis Time",value: "4.2s",  delta: "−0.8s vs last week", icon: Clock,       accent: "teal" },
  { label: "Agentic Jobs Run",  value: "89",    delta: "LLM-assisted",       icon: Brain,       accent: "lavender"  },
];

const RECENT = [
  { id: 1, name: "loader_obf_v3.elf",  arch: "x86_64", mode: "Agentic",  score: 91, status: "critical", time: "2 min ago"  },
  { id: 2, name: "crackme_arm64.bin",  arch: "ARM64",  mode: "Enhanced", score: 54, status: "medium",   time: "18 min ago" },
  { id: 3, name: "util_patch.pe",       arch: "x86",    mode: "Standard", score: 12, status: "clean",    time: "1 hr ago"   },
  { id: 4, name: "dropper_cfflat.elf", arch: "x86_64", mode: "Agentic",  score: 88, status: "critical", time: "3 hr ago"   },
  { id: 5, name: "sandbox_test.bin",   arch: "ARM32",  mode: "Standard", score: 5,  status: "clean",    time: "Yesterday"  },
];

const THREAT_DIST = [
  { label: "CFF",          count: 112, pct: 72 },
  { label: "Opaque Pred.", count: 87,  pct: 56 },
  { label: "String Enc.",  count: 64,  pct: 41 },
  { label: "Anti-Debug",   count: 51,  pct: 33 },
  { label: "Packer",       count: 33,  pct: 21 },
];

const ACTIVITY = [40, 65, 48, 90, 72, 55, 84, 60, 77, 93, 50, 68];
const MONTHS   = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

const SYSTEM_STATUS = [
  { label: "C++ Disassembly Engine", status: "online",   latency: "12ms"  },
  { label: "n8n Orchestration Bus",  status: "online",   latency: "38ms"  },
  { label: "LLM API (OpenAI)",       status: "online",   latency: "320ms" },
  { label: "MongoDB",                status: "online",   latency: "5ms"   },
  { label: "Capstone Framework",     status: "degraded", latency: "—"     },
];

const accentCls = {
  coral:   { bg: "bg-[#fce8e6]",   text: "text-[#e8635a]",   border: "border-[#fce8e6]"   },
  amber:   { bg: "bg-[#faf0e0]",   text: "text-[#d4944a]",   border: "border-[#faf0e0]"   },
  teal:    { bg: "bg-[#e4f2f2]",   text: "text-[#4a9e9e]",   border: "border-[#e4f2f2]"   },
  lavender:{ bg: "bg-[#f0edf7]",   text: "text-[#9b8ec4]",   border: "border-[#f0edf7]"   },
};

const statusMeta = {
  critical: { label: "Critical", cls: "bg-[#fce8e6] text-[#e8635a]",        Icon: XCircle       },
  medium:   { label: "Medium",   cls: "bg-[#faf0e0] text-[#d4944a]",        Icon: AlertTriangle },
  clean:    { label: "Clean",    cls: "bg-[#e4f2f2] text-[#4a9e9e]",        Icon: CheckCircle2  },
};

const modeMeta = {
  Agentic:  "bg-[#f0edf7] text-[#9b8ec4]",
  Enhanced: "bg-[#e4f2f2] text-[#4a9e9e]",
  Standard: "bg-[#e5e1d8] text-[#787268]",
};

const systemStatusMeta = {
  online:   { dot: "bg-[#4a9e9e]", text: "text-[#4a9e9e]", label: "Online"   },
  degraded: { dot: "bg-[#d4944a]", text: "text-[#d4944a]", label: "Degraded" },
  offline:  { dot: "bg-[#e8635a]", text: "text-[#e8635a]", label: "Offline"  },
};

function ThreatScorePill({ score }) {
  const color = score >= 75 ? "text-[#e8635a]" : score >= 40 ? "text-[#d4944a]" : "text-[#4a9e9e]";
  return <span className={`font-bold text-sm tabular-nums ${color}`}>{score}</span>;
}

function StatCard({ label, value, delta, icon: Icon, accent }) {
  const a = accentCls[accent];
  return (
    <div className="rounded-2xl bg-[#f0ede7] border border-[#d1ccc1] p-6 transition-all duration-200 hover:border-[#c4bfb4] hover:shadow-md hover:-translate-y-0.5">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-9 h-9 rounded-xl ${a.bg} flex items-center justify-center`}>
          <Icon size={18} className={a.text} />
        </div>
        <TrendingUp size={14} className="text-[#aba498]" />
      </div>
      <p className="text-3xl font-bold text-[#2b2824] tracking-tight">{value}</p>
      <p className="text-sm text-[#787268] mt-0.5">{label}</p>
      <p className={`text-xs font-medium mt-2 ${a.text}`}>{delta}</p>
    </div>
  );
}

function ActivityChart() {
  const max = Math.max(...ACTIVITY);
  return (
    <div className="rounded-2xl bg-[#f0ede7] border border-[#d1ccc1] p-6">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <BarChart3 size={15} className="text-[#4a9e9e]" />
          <h3 className="text-sm font-semibold text-[#2b2824]">Analysis Volume</h3>
        </div>
        <span className="text-xs text-[#aba498]">Last 12 months</span>
      </div>
      <div className="flex items-end gap-1.5 h-28">
        {ACTIVITY.map((v, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
            <div
              className="w-full rounded-md bg-gradient-to-t from-[#4a9e9e] to-[#7cbfbf] transition-all duration-200 cursor-default"
              style={{ height: `${(v / max) * 100}%` }}
              title={`${v} binaries`}
            />
            <span className="text-[9px] text-[#aba498]">{MONTHS[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ThreatDistribution() {
  return (
    <div className="rounded-2xl bg-[#f0ede7] border border-[#d1ccc1] p-6">
      <div className="flex items-center gap-2 mb-5">
        <Shield size={15} className="text-[#d4944a]" />
        <h3 className="text-sm font-semibold text-[#2b2824]">Obfuscation Techniques</h3>
      </div>
      <div className="flex flex-col gap-3">
        {THREAT_DIST.map(({ label, count, pct }) => (
          <div key={label} className="flex flex-col gap-1">
            <div className="flex justify-between text-xs">
              <span className="text-[#787268]">{label}</span>
              <span className="text-[#aba498]">{count} cases</span>
            </div>
            <div className="h-2 bg-[#e5e1d8] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#d4944a] to-[#e8b87a] rounded-full transition-all duration-700"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RecentReports() {
  return (
    <div className="rounded-2xl bg-[#f0ede7] border border-[#d1ccc1] overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#d1ccc1]">
        <div className="flex items-center gap-2">
          <Activity size={15} className="text-[#9b8ec4]" />
          <h3 className="text-sm font-semibold text-[#2b2824]">Recent Reports</h3>
        </div>
        <button className="text-xs text-[#787268] hover:text-[#e8635a] transition-colors flex items-center gap-1">
          View all <ChevronRight size={12} />
        </button>
      </div>
      <div className="divide-y divide-[#d1ccc1]">
        {RECENT.map((r) => {
          const { label, cls, Icon } = statusMeta[r.status];
          return (
            <div key={r.id} className="flex items-center gap-3 px-6 py-3.5 hover:bg-[#e2ded6] transition-colors cursor-pointer group">
              <div className="shrink-0 w-8 h-8 rounded-xl bg-[#e5e1d8] flex items-center justify-center">
                <Terminal size={13} className="text-[#787268]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-[#2b2824] font-mono truncate">{r.name}</p>
                <p className="text-xs text-[#aba498]">{r.arch} · {r.time}</p>
              </div>
              <span className={`hidden sm:inline-flex text-[10px] font-semibold px-2 py-0.5 rounded-full ${modeMeta[r.mode]}`}>
                {r.mode}
              </span>
              <ThreatScorePill score={r.score} />
              <span className={`hidden md:inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full ${cls}`}>
                <Icon size={10} />{label}
              </span>
              <ChevronRight size={13} className="text-[#aba498] shrink-0" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SystemStatus() {
  const allOnline = SYSTEM_STATUS.every(s => s.status === "online");
  return (
    <div className="rounded-2xl bg-[#f0ede7] border border-[#d1ccc1] p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Activity size={15} className="text-[#4a9e9e]" />
          <h3 className="text-sm font-semibold text-[#2b2824]">System Status</h3>
        </div>
        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${allOnline ? "bg-[#e4f2f2] text-[#4a9e9e]" : "bg-[#faf0e0] text-[#d4944a]"}`}>
          {allOnline ? "All Systems Go" : "Degraded"}
        </span>
      </div>
      <div className="flex flex-col gap-2.5">
        {SYSTEM_STATUS.map(({ label, status, latency }) => {
          const m = systemStatusMeta[status];
          return (
            <div key={label} className="flex items-center justify-between py-0.5">
              <div className="flex items-center gap-2">
                <Circle size={7} className={`${m.dot} fill-current`} />
                <span className="text-xs text-[#787268]">{label}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-[#aba498]">{latency}</span>
                <span className={`text-[10px] font-semibold ${m.text}`}>{m.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function AnalysisModeCard() {
  const [mode, setMode] = useState("Agentic");
  const modes = [
    { id: "Standard", icon: Cpu,   desc: "Raw disassembly only"        },
    { id: "Enhanced", icon: Zap,   desc: "CFG + pattern matching"      },
    { id: "Agentic",  icon: Brain, desc: "LLM de-obfuscation pipeline" },
  ];
  return (
    <div className="rounded-2xl bg-[#f0ede7] border border-[#d1ccc1] p-6">
      <div className="flex items-center gap-2 mb-4">
        <Zap size={15} className="text-[#d4944a]" />
        <h3 className="text-sm font-semibold text-[#2b2824]">Default Analysis Mode</h3>
      </div>
      <div className="flex flex-col gap-2">
        {modes.map(({ id, icon: Icon, desc }) => (
          <button
            key={id}
            onClick={() => setMode(id)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-200
              ${mode === id
                ? "bg-[#f0edf7] text-[#9b8ec4]"
                : "bg-transparent text-[#787268] hover:bg-[#e5e1d8]"}`}
          >
            <Icon size={15} />
            <div>
              <p className="text-xs font-semibold">{id}</p>
              <p className="text-[10px] opacity-60">{desc}</p>
            </div>
            {mode === id && <CheckCircle2 size={13} className="ml-auto text-[#9b8ec4]" />}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="rounded-2xl bg-[#f0ede7] border border-[#d1ccc1] p-6 blob-deco">
        <h1 className="text-xl font-bold text-[#2b2824]">Dashboard</h1>
        <p className="text-sm text-[#787268] mt-0.5">Hybrid Binary Analysis Platform</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 stagger">
        {STATS.map((s) => <StatCard key={s.label} {...s} />)}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 stagger">
        <div className="lg:col-span-2"><ActivityChart /></div>
        <ThreatDistribution />
      </div>

      {/* Bottom */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 stagger">
        <div className="lg:col-span-2"><RecentReports /></div>
        <div className="flex flex-col gap-4">
          <SystemStatus />
          <AnalysisModeCard />
        </div>
      </div>
    </div>
  );
}
