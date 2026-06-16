import { NavLink, useNavigate } from "react-router-dom";
import {
  Home, LayoutDashboard, Upload, FileText, Info, ShieldAlert, LogIn,
} from "lucide-react";

const links = [
  { to: "/home",      label: "Home",      icon: Home            },
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/upload",    label: "Upload",    icon: Upload          },
  { to: "/reports",   label: "Reports",   icon: FileText        },
  { to: "/about",     label: "About",     icon: Info            },
];

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <aside className="w-52 min-h-screen bg-[#0d1117]/90 backdrop-blur-xl border-r border-slate-800/60 flex flex-col fixed top-0 left-0 z-20">

      {/* Brand */}
      <div className="flex items-center gap-2.5 px-4 py-5 border-b border-slate-800/60">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 ring-1 ring-cyan-400/30">
          <ShieldAlert size={15} className="text-white" />
        </div>
        <div>
          <span className="text-sm font-bold text-white tracking-tight block leading-tight">Sentinel</span>
          <span className="text-[9px] text-slate-500 font-medium uppercase tracking-wider">Analyzer</span>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-2 py-5 flex flex-col gap-1">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `group flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
              ${isActive
                ? "bg-gradient-to-r from-cyan-500/15 to-transparent text-cyan-300 border-l-[2.5px] border-cyan-400 shadow-[0_0_12px_-4px_rgba(6,182,212,0.3)]"
                : "text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 border-l-[2.5px] border-transparent"
              }`
            }
          >
            <Icon size={16} className="shrink-0" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* User row */}
      <div className="px-3 py-4 border-t border-slate-800/60">
        <button
          onClick={() => navigate("/signin")}
          className="w-full flex items-center gap-2.5 px-2.5 py-2.5 rounded-lg hover:bg-slate-800/40 transition-all duration-200 group"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center text-[11px] font-bold text-white shrink-0 shadow-lg shadow-violet-500/20">
            AN
          </div>
          <div className="flex-1 text-left">
            <p className="text-xs font-medium text-slate-300 group-hover:text-white transition-colors">Analyst</p>
            <p className="text-[9px] text-slate-600">Guest session</p>
          </div>
          <LogIn size={13} className="text-slate-600 group-hover:text-cyan-400 transition-colors" />
        </button>
      </div>

    </aside>
  );
}
