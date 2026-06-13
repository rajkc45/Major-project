import React, { useState } from "react";

function Upload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="p-6 space-y-6">

      {/* Header */}
      <div className="bg-white shadow rounded-xl p-6">
        <h1 className="text-2xl font-bold text-gray-800">Upload Report</h1>
        <p className="text-gray-600 mt-1">
          Upload files for analysis, storage, or processing.
        </p>
      </div>

      {/* Upload Box */}
      <div className="bg-white shadow rounded-xl p-6 space-y-4">

        <label className="border-2 border-dashed border-gray-300 rounded-xl p-10 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition">
          
          <input
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />

          <p className="text-gray-500">
            Click or drag file to upload
          </p>

          <p className="text-sm text-gray-400 mt-1">
            Supports PDF, images, documents
          </p>
        </label>

        {/* File Preview */}
        {file && (
          <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
            <span className="font-medium">{file.name}</span>
            <span className="text-sm text-gray-500">
              {(file.size / 1024).toFixed(2)} KB
            </span>
          </div>
        )}

        {/* Button */}
        <button
          disabled={!file}
          className={`w-full py-2 rounded-lg font-medium transition ${
            file
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Upload File
        </button>

      </div>
    </div>
  );
}

export default Upload;