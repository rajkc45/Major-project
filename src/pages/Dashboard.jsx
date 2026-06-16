import { useState } from "react";
import {
  FileCode2, ShieldAlert, Activity, Clock, ChevronRight,
  Cpu, Brain, Zap, TrendingUp, AlertTriangle, CheckCircle2,
  XCircle, BarChart3, Terminal, Circle,
} from "lucide-react";

const STATS = [
  { label: "Binaries Analysed", value: "1,284", delta: "+12 this week",      icon: FileCode2,   accent: "cyan"   },
  { label: "Threats Detected",  value: "347",   delta: "27% of total",       icon: ShieldAlert, accent: "rose"   },
  { label: "Avg. Analysis Time",value: "4.2s",  delta: "−0.8s vs last week", icon: Clock,       accent: "violet" },
  { label: "Agentic Jobs Run",  value: "89",    delta: "LLM-assisted",       icon: Brain,       accent: "amber"  },
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
  cyan:   { bg: "bg-cyan-500/10",   text: "text-cyan-400",   ring: "ring-cyan-500/30"   },
  rose:   { bg: "bg-rose-500/10",   text: "text-rose-400",   ring: "ring-rose-500/30"   },
  violet: { bg: "bg-violet-500/10", text: "text-violet-400", ring: "ring-violet-500/30" },
  amber:  { bg: "bg-amber-500/10",  text: "text-amber-400",  ring: "ring-amber-500/30"  },
};

const statusMeta = {
  critical: { label: "Critical", cls: "bg-rose-500/15 text-rose-400",        Icon: XCircle       },
  medium:   { label: "Medium",   cls: "bg-amber-500/15 text-amber-400",      Icon: AlertTriangle },
  clean:    { label: "Clean",    cls: "bg-emerald-500/15 text-emerald-400",  Icon: CheckCircle2  },
};

const modeMeta = {
  Agentic:  "bg-violet-500/20 text-violet-300",
  Enhanced: "bg-cyan-500/20 text-cyan-300",
  Standard: "bg-slate-500/20 text-slate-300",
};

const systemStatusMeta = {
  online:   { dot: "bg-emerald-400", text: "text-emerald-400", label: "Online"   },
  degraded: { dot: "bg-amber-400",   text: "text-amber-400",   label: "Degraded" },
  offline:  { dot: "bg-rose-400",    text: "text-rose-400",    label: "Offline"  },
};

function ThreatScorePill({ score }) {
  const color = score >= 75 ? "text-rose-400" : score >= 40 ? "text-amber-400" : "text-emerald-400";
  return <span className={`font-mono font-bold text-sm tabular-nums ${color}`}>{score}</span>;
}

function StatCard({ label, value, delta, icon: Icon, accent }) {
  const a = accentCls[accent];
  return (
    <div className={`relative overflow-hidden rounded-xl bg-[#0d1117] ring-1 ${a.ring} p-5 flex flex-col gap-4`}>
      <div className={`absolute -top-6 -right-6 w-24 h-24 rounded-full blur-2xl opacity-20 ${a.bg}`} />
      <div className="flex items-start justify-between">
        <div className={`p-2 rounded-lg ${a.bg}`}>
          <Icon size={18} className={a.text} />
        </div>
        <TrendingUp size={14} className="text-slate-600 mt-1" />
      </div>
      <div>
        <p className="text-2xl font-bold text-white font-mono tracking-tight">{value}</p>
        <p className="text-xs text-slate-400 mt-0.5">{label}</p>
      </div>
      <p className={`text-xs font-medium ${a.text}`}>{delta}</p>
    </div>
  );
}

function ActivityChart() {
  const max = Math.max(...ACTIVITY);
  return (
    <div className="rounded-xl bg-[#0d1117] ring-1 ring-slate-800 p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BarChart3 size={15} className="text-cyan-400" />
          <h3 className="text-sm font-semibold text-white">Analysis Volume</h3>
        </div>
        <span className="text-xs text-slate-500">Last 12 months</span>
      </div>
      <div className="flex items-end gap-1.5 h-28">
        {ACTIVITY.map((v, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full rounded-sm bg-cyan-500/70 hover:bg-cyan-400 transition-colors cursor-default"
              style={{ height: `${(v / max) * 100}%` }}
              title={`${v} binaries`}
            />
            <span className="text-[9px] text-slate-600">{MONTHS[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ThreatDistribution() {
  return (
    <div className="rounded-xl bg-[#0d1117] ring-1 ring-slate-800 p-5 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <ShieldAlert size={15} className="text-rose-400" />
        <h3 className="text-sm font-semibold text-white">Obfuscation Techniques</h3>
      </div>
      <div className="flex flex-col gap-3">
        {THREAT_DIST.map(({ label, count, pct }) => (
          <div key={label} className="flex flex-col gap-1">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-mono">{label}</span>
              <span className="text-slate-500">{count} cases</span>
            </div>
            <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-rose-500/70 rounded-full" style={{ width: `${pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RecentReports() {
  return (
    <div className="rounded-xl bg-[#0d1117] ring-1 ring-slate-800 overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Activity size={15} className="text-violet-400" />
          <h3 className="text-sm font-semibold text-white">Recent Reports</h3>
        </div>
        <button className="text-xs text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1">
          View all <ChevronRight size={12} />
        </button>
      </div>
      <div className="divide-y divide-slate-800/60">
        {RECENT.map((r) => {
          const { label, cls, Icon } = statusMeta[r.status];
          return (
            <div key={r.id} className="flex items-center gap-3 px-5 py-3 hover:bg-slate-800/30 transition-colors cursor-pointer group">
              <div className="shrink-0 w-8 h-8 rounded-md bg-slate-800 flex items-center justify-center">
                <Terminal size={13} className="text-slate-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-200 font-mono truncate group-hover:text-white transition-colors">{r.name}</p>
                <p className="text-xs text-slate-500">{r.arch} · {r.time}</p>
              </div>
              <span className={`hidden sm:inline-flex text-[10px] font-semibold px-2 py-0.5 rounded-full ${modeMeta[r.mode]}`}>
                {r.mode}
              </span>
              <ThreatScorePill score={r.score} />
              <span className={`hidden md:inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full ${cls}`}>
                <Icon size={10} />{label}
              </span>
              <ChevronRight size={13} className="text-slate-600 group-hover:text-slate-400 transition-colors shrink-0" />
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
    <div className="rounded-xl bg-[#0d1117] ring-1 ring-slate-800 p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity size={15} className="text-cyan-400" />
          <h3 className="text-sm font-semibold text-white">System Status</h3>
        </div>
        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${allOnline ? "bg-emerald-500/15 text-emerald-400" : "bg-amber-500/15 text-amber-400"}`}>
          {allOnline ? "All Systems Go" : "Degraded"}
        </span>
      </div>
      <div className="flex flex-col gap-2.5">
        {SYSTEM_STATUS.map(({ label, status, latency }) => {
          const m = systemStatusMeta[status];
          return (
            <div key={label} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Circle size={7} className={`${m.dot} fill-current`} />
                <span className="text-xs text-slate-300">{label}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-slate-500">{latency}</span>
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
    <div className="rounded-xl bg-[#0d1117] ring-1 ring-slate-800 p-5 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Zap size={15} className="text-amber-400" />
        <h3 className="text-sm font-semibold text-white">Default Analysis Mode</h3>
      </div>
      <div className="flex flex-col gap-2">
        {modes.map(({ id, icon: Icon, desc }) => (
          <button
            key={id}
            onClick={() => setMode(id)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all ring-1
              ${mode === id
                ? "bg-violet-500/10 ring-violet-500/40 text-violet-300"
                : "bg-transparent ring-slate-800 text-slate-400 hover:ring-slate-600 hover:text-slate-300"}`}
          >
            <Icon size={15} />
            <div>
              <p className="text-xs font-semibold">{id}</p>
              <p className="text-[10px] opacity-60">{desc}</p>
            </div>
            {mode === id && <CheckCircle2 size={13} className="ml-auto text-violet-400" />}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#080c10] text-white">
      <div className="border-b border-slate-800 px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-base font-bold text-white tracking-tight">Dashboard</h1>
          <p className="text-xs text-slate-500 mt-0.5">Hybrid Binary Analysis Platform</p>
        </div>
      </div>

      <div className="px-6 py-6 flex flex-col gap-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((s) => <StatCard key={s.label} {...s} />)}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2"><ActivityChart /></div>
          <ThreatDistribution />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2"><RecentReports /></div>
          <div className="flex flex-col gap-4">
            <SystemStatus />
            <AnalysisModeCard />
          </div>
        </div>
      </div>
    </div>
  );
}