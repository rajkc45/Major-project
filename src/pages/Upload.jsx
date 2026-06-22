import { useState } from "react";
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
    <div className="space-y-6">

      {/* Header */}
      <div className="rounded-2xl bg-[#f0ede7] border border-[#d1ccc1] p-6 blob-deco">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#fce8e6] flex items-center justify-center">
            <UploadIcon size={18} className="text-[#e8635a]" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-[#2b2824]">Upload Binary</h1>
            <p className="text-sm text-[#787268] mt-0.5">Upload a binary file for analysis</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Upload Box */}
        <div className="lg:col-span-2 space-y-4">
          <label
            className={`rounded-2xl border-2 border-dashed transition-all duration-300 p-12 flex flex-col items-center justify-center cursor-pointer gap-4
              ${drag
                ? "border-[#e8635a] bg-[#fce8e6]"
                : "border-[#d1ccc1] bg-[#f0ede7] hover:border-[#c4bfb4] hover:bg-[#e2ded6]"
              }`}
            onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
            onDragLeave={() => setDrag(false)}
            onDrop={handleDrop}
          >
            <input type="file" className="hidden" onChange={handleFileChange} />
            <div className="w-16 h-16 rounded-2xl bg-[#fce8e6] flex items-center justify-center animate-float">
              <UploadIcon size={28} className="text-[#e8635a]" />
            </div>
            <div className="text-center">
              <p className="text-base font-medium text-[#2b2824]">
                {drag ? "Drop it like it's hot" : "Drop your binary here"}
              </p>
              <p className="text-sm text-[#787268] mt-1">or click to browse</p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              {[".elf", ".bin", ".pe", ".exe"].map((ext) => (
                <span key={ext} className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-[#e5e1d8] text-[#787268]">{ext}</span>
              ))}
              <span className="text-xs text-[#aba498]">· up to 50MB</span>
            </div>
          </label>

          {/* File preview */}
          {file && (
            <div className={`rounded-2xl p-4 flex items-center gap-3 border transition-all duration-200 ${isValidFile ? "bg-[#e4f2f2] border-[#4a9e9e]/20" : "bg-[#fce8e6] border-[#e8635a]/20"}`}>
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${isValidFile ? "bg-[#e4f2f2]" : "bg-[#fce8e6]"}`}>
                <FileCode2 size={16} className={isValidFile ? "text-[#4a9e9e]" : "text-[#e8635a]"} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-[#2b2824] font-mono truncate">{file.name}</p>
                <p className="text-xs text-[#787268]">{(file.size / 1024).toFixed(2)} KB</p>
              </div>
              {isValidFile
                ? <CheckCircle2 size={16} className="text-[#4a9e9e] shrink-0" />
                : <AlertTriangle size={16} className="text-[#e8635a] shrink-0" />
              }
              <button onClick={() => setFile(null)} className="text-[#aba498] hover:text-[#2b2824] transition-colors">
                <X size={15} />
              </button>
            </div>
          )}

          {file && !isValidFile && (
            <p className="text-xs text-[#e8635a] flex items-center gap-1">
              <AlertTriangle size={11} /> Unsupported file type. Please upload a .elf, .bin, .pe or .exe file.
            </p>
          )}

          <button
            disabled={!file || !isValidFile}
            className={`w-full py-3 rounded-2xl font-semibold text-sm transition-all duration-200
              ${file && isValidFile
                ? "bg-gradient-to-r from-[#e8635a] to-[#d4944a] text-white hover:shadow-md hover:-translate-y-0.5"
                : "bg-[#e5e1d8] text-[#aba498] cursor-not-allowed"
              }`}
          >
            {file && isValidFile ? "Start Analysis" : "Select a valid binary to continue"}
          </button>
        </div>

        {/* Analysis Mode selector */}
        <div className="rounded-2xl bg-[#f0ede7] border border-[#d1ccc1] p-6 flex flex-col gap-4 h-fit">
          <h3 className="text-sm font-semibold text-[#2b2824]">Analysis Mode</h3>
          <div className="flex flex-col gap-2">
            {modes.map(({ id, desc }) => (
              <button
                key={id}
                onClick={() => setMode(id)}
                className={`flex items-center gap-3 px-3 py-3 rounded-xl text-left transition-all duration-200
                  ${mode === id
                    ? "bg-[#f0edf7] text-[#9b8ec4]"
                    : "bg-transparent text-[#787268] hover:bg-[#e5e1d8]"}`}
              >
                <div className={`w-2 h-2 rounded-full ${mode === id ? "bg-[#9b8ec4]" : "bg-[#aba498]"}`} />
                <div>
                  <p className={`text-xs font-semibold ${mode === id ? "text-[#9b8ec4]" : "text-[#787268]"}`}>{id}</p>
                  <p className="text-[10px] text-[#aba498]">{desc}</p>
                </div>
                {mode === id && <CheckCircle2 size={13} className="ml-auto text-[#9b8ec4]" />}
              </button>
            ))}
          </div>

          <div className="rounded-xl bg-[#e5e1d8] p-3 mt-2">
            <p className="text-[11px] text-[#787268] leading-relaxed">
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
