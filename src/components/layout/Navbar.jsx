import { NavLink, useNavigate } from "react-router-dom";
import { Home, LayoutDashboard, Upload, FileText, Info } from "lucide-react";

const links = [
  { to: "/home",      label: "Home",      icon: Home            },
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/upload",    label: "Upload",    icon: Upload          },
  { to: "/reports",   label: "Reports",   icon: FileText        },
  { to: "/about",     label: "About",     icon: Info            },
];

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="bg-[#f0ede7]/80 backdrop-blur-md border-b border-[#d1ccc1] px-6 py-3 flex items-center justify-between sticky top-0 z-30">
      {/* Brand */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#e8635a] to-[#d4944a] flex items-center justify-center shadow-sm animate-float">
          <span className="text-white text-xs font-bold">BA</span>
        </div>
          <span className="text-base font-semibold text-[#2b2824] tracking-tight">
          Binary Analyzer
        </span>
      </div>

      {/* Nav links */}
      <nav className="hidden md:flex items-center gap-1">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200
              ${isActive
                ? "bg-[#fce8e6] text-[#e8635a]"
                : "text-[#787268] hover:text-[#2b2824] hover:bg-[#e5e1d8]"
              }`
            }
          >
            <Icon size={15} />
            {label}
          </NavLink>
        ))}
      </nav>

      {/* User */}
      <div className="flex items-center gap-3">
        <span className="text-sm text-[#787268]">
          Hey, <span className="text-[#e8635a] font-semibold">Analyst</span>
        </span>
        <button
          onClick={() => navigate("/signin")}
          className="w-9 h-9 rounded-full bg-[#e5e1d8] hover:bg-[#d1ccc1] flex items-center justify-center transition-all text-[#787268] hover:text-[#2b2824]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
        </button>
      </div>
    </header>
  );
}
