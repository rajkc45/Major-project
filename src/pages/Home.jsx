import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="p-6 space-y-6">

      {/* Header */}
      <div className="bg-white shadow rounded-xl p-6">
        <h1 className="text-2xl font-bold">Dashboard Home</h1>
        <p className="text-gray-600 mt-1">
          Welcome back! Here’s a quick overview of your system.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="bg-blue-50 p-5 rounded-xl shadow">
          <h2 className="font-semibold text-blue-700">Uploads</h2>
          <p className="text-2xl font-bold mt-2">12</p>
        </div>

        <div className="bg-green-50 p-5 rounded-xl shadow">
          <h2 className="font-semibold text-green-700">Reports</h2>
          <p className="text-2xl font-bold mt-2">5</p>
        </div>

        <div className="bg-purple-50 p-5 rounded-xl shadow">
          <h2 className="font-semibold text-purple-700">System Status</h2>
          <p className="text-green-600 font-medium mt-2">Active</p>
        </div>

      </div>

      {/* Quick Actions */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>

        <div className="flex flex-wrap gap-4">

          <Link
            to="/upload"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Upload File
          </Link>

          <Link
            to="/reports"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            View Reports
          </Link>

          <Link
            to="/about"
            className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800"
          >
            About System
          </Link>

        </div>
      </div>

    </div>
  );
}

export default Home;