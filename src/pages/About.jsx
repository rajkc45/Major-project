import React from "react";

function About() {
  return (
    <div className="p-6 space-y-6">

      {/* Header */}
      <div className="bg-white shadow rounded-xl p-6">
        <h1 className="text-2xl font-bold text-gray-800">About This Dashboard</h1>
        <p className="text-gray-600 mt-2">
          This project is a full-stack admin dashboard built for managing reports,
          system status, and analytics in a structured UI system.
        </p>
      </div>

      {/* Project Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="bg-blue-50 p-5 rounded-xl shadow">
          <h2 className="font-semibold text-blue-700">Frontend</h2>
          <p className="text-sm text-gray-600 mt-1">
            React + Vite + Tailwind CSS
          </p>
        </div>

        <div className="bg-green-50 p-5 rounded-xl shadow">
          <h2 className="font-semibold text-green-700">Backend</h2>
          <p className="text-sm text-gray-600 mt-1">
            Node.js / Express (planned or connected API)
          </p>
        </div>

        <div className="bg-purple-50 p-5 rounded-xl shadow">
          <h2 className="font-semibold text-purple-700">Purpose</h2>
          <p className="text-sm text-gray-600 mt-1">
            Dashboard for analytics, system monitoring, and reports
          </p>
        </div>

      </div>

      {/* Status Section */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Project Status</h2>

        <div className="space-y-3">
          <div className="flex justify-start gap-4">
            <span>UI System</span>
            <span className="text-green-600 font-medium ">Active</span>
          </div>

          <div className="flex justify-start gap-5">
            <span>Routing</span>
            <span className="text-green-600 font-medium text-center">Working</span>
          </div>

          <div className="flex justify-start gap-0">
            <span>Charts</span>
            <span className="text-yellow-600 font-medium text-center">Fixing</span>
          </div>

          <div className="flex justify-start gap-0">
            <span>Backend</span>
            <span className="text-red-500 font-medium text-center">Not Connected</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;