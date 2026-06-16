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
    // TODO: connect to your auth API here
    // For now just go to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#080c10] flex items-center justify-center px-4">
      <div className="w-full max-w-sm space-y-6">

        {/* Logo */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 ring-1 ring-cyan-500/30 flex items-center justify-center">
            <ShieldAlert size={22} className="text-cyan-400" />
          </div>
          <div className="text-center">
            <h1 className="text-lg font-bold text-white">Binary Analyzer</h1>
            <p className="text-xs text-slate-500 mt-0.5">Sign in to your account</p>
          </div>
        </div>

        {/* Form */}
        <div className="rounded-xl bg-[#0d1117] ring-1 ring-slate-800 p-6 space-y-4">

          {error && (
            <div className="rounded-lg bg-rose-500/10 ring-1 ring-rose-500/20 px-3 py-2">
              <p className="text-xs text-rose-400">{error}</p>
            </div>
          )}

          {/* Email */}
          <div className="space-y-1.5">
            <label className="text-xs text-slate-400">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(""); }}
              placeholder="analyst@example.com"
              className="w-full bg-[#080c10] ring-1 ring-slate-800 focus:ring-cyan-500/40 focus:outline-none rounded-lg px-3 py-2.5 text-sm text-white placeholder-slate-700 transition-all"
            />
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <label className="text-xs text-slate-400">Password</label>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(""); }}
                placeholder="••••••••"
                className="w-full bg-[#080c10] ring-1 ring-slate-800 focus:ring-cyan-500/40 focus:outline-none rounded-lg px-3 py-2.5 text-sm text-white placeholder-slate-700 transition-all pr-10"
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

          {/* Submit */}
          <button
            onClick={handleSubmit}
            className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-[#080c10] font-semibold text-sm py-2.5 rounded-lg transition-colors mt-2"
          >
            <LogIn size={15} />
            Sign In
          </button>

          {/* Guest */}
          <button
            onClick={() => navigate("/dashboard")}
            className="w-full text-xs text-slate-600 hover:text-slate-400 transition-colors py-1"
          >
            Continue as Guest →
          </button>

        </div>

        <p className="text-center text-[10px] text-slate-700">
          Binary Analysis Platform · Final Year Project
        </p>

      </div>
    </div>
  );
}