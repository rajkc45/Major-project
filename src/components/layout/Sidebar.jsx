import { NavLink, useNavigate } from "react-router-dom";
import {
  Home, LayoutDashboard, Upload, FileText, Info,
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
    <aside className="w-52 min-h-screen bg-[#f0ede7]/90 backdrop-blur-xl border-r border-[#d1ccc1] flex flex-col fixed top-0 left-0 z-20">
      {/* Brand */}
      <div className="flex items-center gap-2.5 px-4 py-5 border-b border-[#d1ccc1]">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#e8635a] to-[#d4944a] flex items-center justify-center shadow-sm">
          <span className="text-white text-xs font-bold">BA</span>
        </div>
        <span className="text-sm font-bold text-[#2b2824] tracking-tight">Binary Analyzer</span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-2 py-5 flex flex-col gap-1">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200
              ${isActive
                ? "bg-[#fce8e6] text-[#e8635a]"
                : "text-[#787268] hover:text-[#2b2824] hover:bg-[#e5e1d8]"
              }`
            }
          >
            <Icon size={16} className="shrink-0" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* User row */}
      <div className="px-3 py-4 border-t border-[#d1ccc1]">
        <button
          onClick={() => navigate("/signin")}
          className="w-full flex items-center gap-2.5 px-2.5 py-2.5 rounded-xl hover:bg-[#e5e1d8] transition-all duration-200 group"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#9b8ec4] to-[#7c6fad] flex items-center justify-center text-[11px] font-bold text-white shrink-0 shadow-sm">
            AN
          </div>
          <div className="flex-1 text-left">
            <p className="text-xs font-medium text-[#2b2824] group-hover:text-[#e8635a] transition-colors">Analyst</p>
            <p className="text-[9px] text-[#787268]">Guest session</p>
          </div>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#787268] group-hover:text-[#e8635a] transition-colors">
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
            <polyline points="10 17 15 12 10 7" />
            <line x1="15" y1="12" x2="3" y2="12" />
          </svg>
        </button>
      </div>
    </aside>
  );
}
