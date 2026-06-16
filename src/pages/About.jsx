import React from "react";
import { Code2, Server, Brain, ShieldAlert, CheckCircle2, AlertTriangle, XCircle, Cpu, Zap, Database } from "lucide-react";

const STACK = [
  {
    label: "Frontend",
    icon: Code2,
    accent: "cyan",
    items: ["React + Vite", "Tailwind CSS", "React Router v6", "Lucide Icons"],
  },
  {
    label: "Backend",
    icon: Server,
    accent: "emerald",
    items: ["Node.js + Express", "C++ Disassembly Engine", "Capstone Framework", "REST API"],
  },
  {
    label: "AI Pipeline",
    icon: Brain,
    accent: "violet",
    items: ["n8n Orchestration", "OpenAI LLM", "Agentic Analysis", "De-obfuscation"],
  },
  {
    label: "Database",
    icon: Database,
    accent: "amber",
    items: ["MongoDB", "Report Storage", "Binary Metadata", "Threat Logs"],
  },
];

const STATUS = [
  { label: "UI System",      status: "done",    note: "Active"         },
  { label: "Routing",        status: "done",    note: "Working"        },
  { label: "Charts",         status: "warning", note: "In progress"    },
  { label: "C++ Engine",     status: "warning", note: "Integrating"    },
  { label: "n8n Pipeline",   status: "warning", note: "Configuring"    },
  { label: "Backend API",    status: "error",   note: "Not connected"  },
  { label: "MongoDB",        status: "error",   note: "Not connected"  },
];

const accentCls = {
  cyan:   { bg: "bg-cyan-500/10",   text: "text-cyan-400",   ring: "ring-cyan-500/30"   },
  emerald:{ bg: "bg-emerald-500/10",text: "text-emerald-400",ring: "ring-emerald-500/30"},
  violet: { bg: "bg-violet-500/10", text: "text-violet-400", ring: "ring-violet-500/30" },
  amber:  { bg: "bg-amber-500/10",  text: "text-amber-400",  ring: "ring-amber-500/30"  },
};

const statusMeta = {
  done:    { Icon: CheckCircle2, cls: "text-emerald-400", bg: "bg-emerald-500/10 ring-emerald-500/20" },
  warning: { Icon: AlertTriangle,cls: "text-amber-400",   bg: "bg-amber-500/10 ring-amber-500/20"    },
  error:   { Icon: XCircle,      cls: "text-rose-400",    bg: "bg-rose-500/10 ring-rose-500/20"      },
};

export default function About() {
  return (
    <div className="min-h-screen bg-[#080c10] p-6 space-y-6">

      {/* Header */}
      <div className="rounded-xl bg-[#0d1117] ring-1 ring-slate-800 p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
            <ShieldAlert size={16} className="text-cyan-400" />
          </div>
          <h1 className="text-lg font-bold text-white">About This Project</h1>
        </div>
        <p className="text-sm text-slate-400 leading-relaxed ml-11">
          A Hybrid Binary Analysis Platform combining a C++ disassembly engine, n8n AI orchestration,
          and a React frontend for visualizing de-obfuscated binary code. Built as a final year project.
        </p>
      </div>

      {/* Tech Stack */}
      <div>
        <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {STACK.map(({ label, icon: Icon, accent, items }) => {
            const a = accentCls[accent];
            return (
              <div key={label} className={`rounded-xl bg-[#0d1117] ring-1 ${a.ring} p-5 flex flex-col gap-3`}>
                <div className="flex items-center gap-2">
                  <div className={`w-7 h-7 rounded-lg ${a.bg} flex items-center justify-center`}>
                    <Icon size={14} className={a.text} />
                  </div>
                  <h3 className="text-sm font-semibold text-white">{label}</h3>
                </div>
                <ul className="flex flex-col gap-1.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-slate-400">
                      <span className={`w-1 h-1 rounded-full ${a.bg} ${a.text} inline-block`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Status */}
      <div>
        <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Project Status</h2>
        <div className="rounded-xl bg-[#0d1117] ring-1 ring-slate-800 overflow-hidden">
          {STATUS.map(({ label, status, note }, i) => {
            const { Icon, cls, bg } = statusMeta[status];
            return (
              <div
                key={label}
                className={`flex items-center justify-between px-5 py-3.5 ${i !== STATUS.length - 1 ? "border-b border-slate-800/60" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <Cpu size={13} className="text-slate-600" />
                  <span className="text-sm text-slate-300">{label}</span>
                </div>
                <span className={`flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full ring-1 ${bg} ${cls}`}>
                  <Icon size={11} />
                  {note}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer note */}
      <div className="rounded-xl bg-[#0d1117] ring-1 ring-slate-800 p-5 flex items-start gap-3">
        <Zap size={15} className="text-amber-400 mt-0.5 shrink-0" />
        <p className="text-xs text-slate-500 leading-relaxed">
          This platform is under active development as part of a final year university project.
          Features are being integrated incrementally — backend API and AI pipeline connections are coming next.
        </p>
      </div>

    </div>
  );
}