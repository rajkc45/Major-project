import { Code2, Server, Brain, Shield, CheckCircle2, AlertTriangle, XCircle, Cpu, Zap, Database, Sparkles } from "lucide-react";

const STACK = [
  {
    label: "Frontend",
    icon: Code2,
    accent: "coral",
    items: ["React + Vite", "Tailwind CSS", "React Router v6", "Lucide Icons"],
  },
  {
    label: "Backend",
    icon: Server,
    accent: "teal",
    items: ["Node.js + Express", "C++ Disassembly Engine", "Capstone Framework", "REST API"],
  },
  {
    label: "AI Pipeline",
    icon: Brain,
    accent: "lavender",
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
  coral:   { bg: "bg-[#fce8e6]",   text: "text-[#e8635a]" },
  teal:    { bg: "bg-[#e4f2f2]",   text: "text-[#4a9e9e]" },
  lavender:{ bg: "bg-[#f0edf7]",   text: "text-[#9b8ec4]" },
  amber:   { bg: "bg-[#faf0e0]",   text: "text-[#d4944a]" },
};

const statusMeta = {
  done:    { Icon: CheckCircle2, cls: "text-[#4a9e9e]", bg: "bg-[#e4f2f2]" },
  warning: { Icon: AlertTriangle,cls: "text-[#d4944a]", bg: "bg-[#faf0e0]" },
  error:   { Icon: XCircle,      cls: "text-[#e8635a]", bg: "bg-[#fce8e6]" },
};

export default function About() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="rounded-2xl bg-[#f0ede7] border border-[#d1ccc1] p-8 blob-deco">
        <div className="flex items-center gap-4 mb-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#e8635a] to-[#d4944a] flex items-center justify-center animate-float">
            <Sparkles size={18} className="text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-[#2b2824]">About This Project</h1>
            <p className="text-sm text-[#787268] mt-0.5">
              The story behind the Binary Analysis Platform
            </p>
          </div>
        </div>
        <p className="text-sm text-[#787268] leading-relaxed ml-[60px]">
          A Hybrid Binary Analysis Platform combining a C++ disassembly engine, n8n AI orchestration,
          and a React frontend for visualizing de-obfuscated binary code. Built as a final year project.
        </p>
      </div>

      {/* Tech Stack */}
      <div>
        <h2 className="text-xs font-semibold text-[#aba498] uppercase tracking-widest mb-3">Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 stagger">
          {STACK.map(({ label, icon: Icon, accent, items }) => {
            const a = accentCls[accent];
            return (
              <div key={label} className="rounded-2xl bg-[#f0ede7] border border-[#d1ccc1] p-6 transition-all hover:border-[#c4bfb4] hover:shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-8 h-8 rounded-xl ${a.bg} flex items-center justify-center`}>
                    <Icon size={15} className={a.text} />
                  </div>
                  <h3 className="text-sm font-semibold text-[#2b2824]">{label}</h3>
                </div>
                <ul className="flex flex-col gap-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#787268]">
                      <span className={`w-1.5 h-1.5 rounded-full ${a.bg} ${a.text} inline-block`} />
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
        <h2 className="text-xs font-semibold text-[#aba498] uppercase tracking-widest mb-3">Project Status</h2>
        <div className="rounded-2xl bg-[#f0ede7] border border-[#d1ccc1] overflow-hidden">
          {STATUS.map(({ label, status, note }, i) => {
            const { Icon, cls, bg } = statusMeta[status];
            return (
              <div
                key={label}
                className={`flex items-center justify-between px-6 py-3.5 transition-colors hover:bg-[#e2ded6] ${i !== STATUS.length - 1 ? "border-b border-[#d1ccc1]" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <Cpu size={13} className="text-[#aba498]" />
                  <span className="text-sm text-[#787268]">{label}</span>
                </div>
                <span className={`flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full ${bg} ${cls}`}>
                  <Icon size={11} />
                  {note}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer note */}
      <div className="rounded-2xl bg-[#f0ede7] border border-[#d1ccc1] p-6 flex items-start gap-3">
        <Zap size={15} className="text-[#d4944a] mt-0.5 shrink-0" />
        <p className="text-sm text-[#787268] leading-relaxed">
          This platform is under active development as part of a final year university project.
          Features are being integrated incrementally — backend API and AI pipeline connections are coming next.
        </p>
      </div>

    </div>
  );
}
