import React from "react";
import { Link } from "react-router-dom";
import { Upload, FileText, Info, ShieldAlert, Clock, Brain } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080c10] p-6 space-y-6">

      {/* Header */}
      <div className="rounded-xl bg-[#0d1117] ring-1 ring-slate-800 p-6">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
            <ShieldAlert size={16} className="text-cyan-400" />
          </div>
          <h1 className="text-xl font-bold text-white">Welcome back, Analyst</h1>
        </div>
        <p className="text-slate-400 text-sm mt-1 ml-11">
          Here's a quick overview of your Binary Analysis Platform.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="rounded-xl bg-[#0d1117] ring-1 ring-cyan-500/30 p-5 flex flex-col gap-3">
          <div className="w-7 h-7 rounded-lg bg-cyan-500/10 flex items-center justify-center">
            <Upload size={14} className="text-cyan-400" />
          </div>
          <p className="text-2xl font-bold text-white font-mono">12</p>
          <p className="text-xs text-slate-400">Total Uploads</p>
          <p className="text-xs text-cyan-400">+3 this week</p>
        </div>

        <div className="rounded-xl bg-[#0d1117] ring-1 ring-emerald-500/30 p-5 flex flex-col gap-3">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center">
            <FileText size={14} className="text-emerald-400" />
          </div>
          <p className="text-2xl font-bold text-white font-mono">5</p>
          <p className="text-xs text-slate-400">Reports Generated</p>
          <p className="text-xs text-emerald-400">2 flagged critical</p>
        </div>

        <div className="rounded-xl bg-[#0d1117] ring-1 ring-violet-500/30 p-5 flex flex-col gap-3">
          <div className="w-7 h-7 rounded-lg bg-violet-500/10 flex items-center justify-center">
            <Brain size={14} className="text-violet-400" />
          </div>
          <p className="text-sm font-bold text-emerald-400 font-mono mt-1">● Active</p>
          <p className="text-xs text-slate-400">System Status</p>
          <p className="text-xs text-violet-400">All engines running</p>
        </div>

      </div>

      {/* Quick Actions */}
      <div className="rounded-xl bg-[#0d1117] ring-1 ring-slate-800 p-6">
        <div className="flex items-center gap-2 mb-5">
          <Clock size={15} className="text-amber-400" />
          <h2 className="text-sm font-semibold text-white">Quick Actions</h2>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            to="/upload"
            className="flex items-center gap-2 bg-cyan-500/10 text-cyan-400 ring-1 ring-cyan-500/30 px-4 py-2 rounded-lg text-sm font-medium hover:bg-cyan-500/20 transition-colors"
          >
            <Upload size={14} /> Upload File
          </Link>

          <Link
            to="/reports"
            className="flex items-center gap-2 bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30 px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-500/20 transition-colors"
          >
            <FileText size={14} /> View Reports
          </Link>

          <Link
            to="/about"
            className="flex items-center gap-2 bg-slate-500/10 text-slate-400 ring-1 ring-slate-500/30 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-500/20 transition-colors"
          >
            <Info size={14} /> About System
          </Link>
        </div>
      </div>

    </div>
  );
}