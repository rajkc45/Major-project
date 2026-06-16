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
    <div className="w-52 min-h-screen bg-[#0d1117] border-r border-slate-800 flex flex-col fixed top-0 left-0 z-10">

      {/* Brand */}
      <div className="flex items-center gap-2 px-4 py-5 border-b border-slate-800">
        <div className="w-7 h-7 rounded-lg bg-cyan-500/10 flex items-center justify-center">
          <ShieldAlert size={14} className="text-cyan-400" />
        </div>
        <span className="text-sm font-semibold text-slate-200">Binary Analyzer</span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-2 py-4 flex flex-col gap-1">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all
              ${isActive
                ? "bg-cyan-500/10 text-cyan-400 border-l-2 border-cyan-400 pl-[10px]"
                : "text-slate-500 hover:text-slate-300 hover:bg-slate-800/50"
              }`
            }
          >
            <Icon size={15} />
            {label}
          </NavLink>
        ))}
      </nav>

      {/* User row — clicks to signin */}
      <div className="px-3 py-4 border-t border-slate-800">
        <button
          onClick={() => navigate("/signin")}
          className="w-full flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-slate-800/50 transition-colors group"
        >
          <div className="w-7 h-7 rounded-full bg-violet-500/20 flex items-center justify-center text-[10px] font-semibold text-violet-400 shrink-0">
            AN
          </div>
          <div className="flex-1 text-left">
            <p className="text-xs text-slate-300">Analyst</p>
            <p className="text-[10px] text-slate-600">Guest · click to sign in</p>
          </div>
          <LogIn size={13} className="text-slate-600 group-hover:text-cyan-400 transition-colors" />
        </button>
      </div>

    </div>
  );
}