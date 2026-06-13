import StatCard from "../components/dashboard/StatCard";
import ActivityChart from "../components/dashboard/ActivityChart";
import SystemStatus from "../components/dashboard/SystemStatus";
import RecentReports from "../components/dashboard/RecentReports";
import ThreatDistribution from "../components/dashboard/ThreatDistribution";

const STATS = [
  { label: "Binaries", value: "1,284" },
  { label: "Threats", value: "347" },
  { label: "Avg Time", value: "4.2s" },
  { label: "Jobs", value: "89" },
];

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map((s) => (
          <StatCard key={s.label} label={s.label} value={s.value} />
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <ActivityChart />
        </div>
        <ThreatDistribution />
      </div>

      {/* Bottom */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <RecentReports />
        </div>
        <SystemStatus />
      </div>

    </div>
  );
}