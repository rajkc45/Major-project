import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShieldAlert, Eye, EyeOff, LogIn } from "lucide-react";

export default function SignIn() {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow]         = useState(false);
  const [error, setError]       = useState("");
  const navigate                = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-sm space-y-6 relative">
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 ring-1 ring-cyan-400/30">
            <ShieldAlert size={22} className="text-white" />
          </div>
          <div className="text-center">
            <h1 className="text-lg font-bold text-white">
              <span className="gradient-text">Sentinel</span>
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">Sign in to your account</p>
          </div>
        </div>

        <div className="rounded-xl bg-[#0d1117]/80 backdrop-blur-sm ring-1 ring-slate-800/80 p-6 space-y-4">
          {error && (
            <div className="rounded-lg bg-rose-500/10 ring-1 ring-rose-500/20 px-3 py-2">
              <p className="text-xs text-rose-400">{error}</p>
            </div>
          )}

          <div className="space-y-1.5">
            <label className="text-xs text-slate-400 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(""); }}
              placeholder="analyst@example.com"
              className="w-full bg-[#080c10] ring-1 ring-slate-800 focus:ring-cyan-500/40 focus:outline-none rounded-lg px-3 py-2.5 text-sm text-white placeholder-slate-700 transition-all duration-200"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs text-slate-400 font-medium">Password</label>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(""); }}
                placeholder="••••••••"
                className="w-full bg-[#080c10] ring-1 ring-slate-800 focus:ring-cyan-500/40 focus:outline-none rounded-lg px-3 py-2.5 text-sm text-white placeholder-slate-700 transition-all duration-200 pr-10"
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 hover:text-slate-400 transition-colors"
              >
                {show ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-[#080c10] font-semibold text-sm py-2.5 rounded-lg transition-all duration-200 shadow-lg shadow-cyan-500/20"
          >
            <LogIn size={15} />
            Sign In
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className="w-full text-xs text-slate-600 hover:text-slate-400 transition-colors py-1"
          >
            Continue as Guest →
          </button>
        </div>

        <p className="text-center text-[10px] text-slate-700">
          Sentinel · Binary Analysis Platform · Final Year Project
        </p>
      </div>
    </div>
  );
}
