import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, LogIn, Sparkles } from "lucide-react";

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
    <div className="min-h-[80vh] flex items-center justify-center px-4 relative overflow-hidden">
      {/* decorative blobs */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-[#e8635a]/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-[#9b8ec4]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-sm space-y-6 relative">
        <div className="flex flex-col items-center gap-3">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#e8635a] to-[#d4944a] flex items-center justify-center shadow-sm animate-float">
            <Sparkles size={22} className="text-white" />
          </div>
          <div className="text-center">
            <h1 className="text-xl font-bold text-[#2b2824]">
              Binary Analyzer
            </h1>
            <p className="text-sm text-[#787268] mt-0.5">Sign in to your account</p>
          </div>
        </div>

        <div className="rounded-2xl bg-[#f0ede7] border border-[#d1ccc1] p-6 space-y-4">
          {error && (
            <div className="rounded-xl bg-[#fce8e6] px-3 py-2">
              <p className="text-xs text-[#e8635a]">{error}</p>
            </div>
          )}

          <div className="space-y-1.5">
            <label className="text-xs text-[#787268] font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(""); }}
              placeholder="analyst@example.com"
              className="w-full bg-[#e2ded6] border border-[#d1ccc1] focus:border-[#e8635a]/40 focus:outline-none rounded-xl px-3 py-2.5 text-sm text-[#2b2824] placeholder-[#aba498] transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs text-[#787268] font-medium">Password</label>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(""); }}
                placeholder="••••••••"
                className="w-full bg-[#e2ded6] border border-[#d1ccc1] focus:border-[#e8635a]/40 focus:outline-none rounded-xl px-3 py-2.5 text-sm text-[#2b2824] placeholder-[#aba498] transition-all pr-10"
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#aba498] hover:text-[#787268] transition-colors"
              >
                {show ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#e8635a] to-[#d4944a] text-white font-semibold text-sm py-2.5 rounded-xl transition-all hover:shadow-md hover:-translate-y-0.5"
          >
            <LogIn size={15} />
            Sign In
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className="w-full text-xs text-[#aba498] hover:text-[#e8635a] transition-colors py-1"
          >
            Continue as Guest →
          </button>
        </div>

        <p className="text-center text-[10px] text-[#aba498]">
          Binary Analysis Platform · Final Year Project
        </p>
      </div>
    </div>
  );
}
