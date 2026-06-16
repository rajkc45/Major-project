import React, { useState } from "react";
import { Upload as UploadIcon, FileCode2, X, CheckCircle2, AlertTriangle } from "lucide-react";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [drag, setDrag] = useState(false);
  const [mode, setMode] = useState("Agentic");

  const modes = [
    { id: "Standard", desc: "Raw disassembly only"        },
    { id: "Enhanced", desc: "CFG + pattern matching"      },
    { id: "Agentic",  desc: "LLM de-obfuscation pipeline" },
  ];

  const handleFileChange = (e) => setFile(e.target.files[0]);
  const handleDrop = (e) => {
    e.preventDefault();
    setDrag(false);
    if (e.dataTransfer.files[0]) setFile(e.dataTransfer.files[0]);
  };

  const isValidFile = file && (
    file.name.endsWith(".elf") ||
    file.name.endsWith(".bin") ||
    file.name.endsWith(".pe")  ||
    file.name.endsWith(".exe")
  );

  return (
    <div className="min-h-screen bg-[#080c10] p-6 space-y-6">

      {/* Header */}
      <div className="rounded-xl bg-[#0d1117] ring-1 ring-slate-800 p-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
            <UploadIcon size={16} className="text-cyan-400" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">Upload Binary</h1>
            <p className="text-xs text-slate-400 mt-0.5">Upload a binary file for analysis</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Upload Box */}
        <div className="lg:col-span-2 space-y-4">
          <label
            className={`rounded-xl border-2 border-dashed transition-colors duration-200 p-12 flex flex-col items-center justify-center cursor-pointer gap-4
              ${drag ? "border-cyan-500 bg-cyan-500/5" : "border-slate-700 bg-[#0d1117] hover:border-slate-500"}`}
            onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
            onDragLeave={() => setDrag(false)}
            onDrop={handleDrop}
          >
            <input type="file" className="hidden" onChange={handleFileChange} />
            <div className="w-14 h-14 rounded-full bg-cyan-500/10 flex items-center justify-center">
              <UploadIcon size={24} className="text-cyan-400" />
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-slate-300">Drop your binary here</p>
              <p className="text-xs text-slate-500 mt-1">or click to browse</p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              {[".elf", ".bin", ".pe", ".exe"].map((ext) => (
                <span key={ext} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">{ext}</span>
              ))}
              <span className="text-[10px] text-slate-500">· up to 50MB</span>
            </div>
          </label>

          {/* File preview */}
          {file && (
            <div className={`rounded-xl p-4 flex items-center gap-3 ring-1 ${isValidFile ? "bg-emerald-500/5 ring-emerald-500/20" : "bg-rose-500/5 ring-rose-500/20"}`}>
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isValidFile ? "bg-emerald-500/10" : "bg-rose-500/10"}`}>
                <FileCode2 size={15} className={isValidFile ? "text-emerald-400" : "text-rose-400"} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-200 font-mono truncate">{file.name}</p>
                <p className="text-xs text-slate-500">{(file.size / 1024).toFixed(2)} KB</p>
              </div>
              {isValidFile
                ? <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                : <AlertTriangle size={16} className="text-rose-400 shrink-0" />
              }
              <button onClick={() => setFile(null)} className="text-slate-600 hover:text-slate-300 transition-colors">
                <X size={15} />
              </button>
            </div>
          )}

          {/* Warning for invalid file */}
          {file && !isValidFile && (
            <p className="text-xs text-rose-400 flex items-center gap-1">
              <AlertTriangle size={11} /> Unsupported file type. Please upload a .elf, .bin, .pe or .exe file.
            </p>
          )}

          {/* Submit button */}
          <button
            disabled={!file || !isValidFile}
            className={`w-full py-3 rounded-xl font-semibold text-sm transition-all
              ${file && isValidFile
                ? "bg-cyan-500 text-[#080c10] hover:bg-cyan-400"
                : "bg-slate-800 text-slate-600 cursor-not-allowed ring-1 ring-slate-700"
              }`}
          >
            {file && isValidFile ? "Start Analysis" : "Select a valid binary to continue"}
          </button>
        </div>

        {/* Analysis Mode selector */}
        <div className="rounded-xl bg-[#0d1117] ring-1 ring-slate-800 p-5 flex flex-col gap-4 h-fit">
          <h3 className="text-sm font-semibold text-white">Analysis Mode</h3>
          <div className="flex flex-col gap-2">
            {modes.map(({ id, desc }) => (
              <button
                key={id}
                onClick={() => setMode(id)}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-all ring-1
                  ${mode === id
                    ? "bg-violet-500/10 ring-violet-500/40"
                    : "bg-transparent ring-slate-800 hover:ring-slate-600"}`}
              >
                <div className={`w-2 h-2 rounded-full ${mode === id ? "bg-violet-400" : "bg-slate-700"}`} />
                <div>
                  <p className={`text-xs font-semibold ${mode === id ? "text-violet-300" : "text-slate-400"}`}>{id}</p>
                  <p className="text-[10px] text-slate-600">{desc}</p>
                </div>
                {mode === id && <CheckCircle2 size={13} className="ml-auto text-violet-400" />}
              </button>
            ))}
          </div>

          <div className="rounded-lg bg-slate-800/50 p-3 mt-2">
            <p className="text-[10px] text-slate-500 leading-relaxed">
              {mode === "Standard" && "Disassembles the binary using Capstone and returns raw assembly output. Fastest mode."}
              {mode === "Enhanced" && "Builds a Control Flow Graph and applies pattern matching to detect common obfuscation techniques."}
              {mode === "Agentic"  && "Sends disassembly through the n8n pipeline to an LLM for full de-obfuscation and human-readable explanation."}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}