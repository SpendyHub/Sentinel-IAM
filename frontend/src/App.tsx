
import {
  Users,
  UserCheck,
  Clock,
  ShieldAlert,
} from 'lucide-react';

import Sidebar from './components/Sidebar';
import StatCard from './components/StatCard';
import ActivityItem from './components/ActivityItem';
import DashboardHeader from './components/DashboardHeader';

import './App.css';

function App() {
  return (
    <div className="app-shell">

      {/* Persistent navigation. */}
      <Sidebar />

      {/* Main dashboard workspace. */}
      <main className="main-content">

        <DashboardHeader />

        <header className="page-header">
          <h1>Overview</h1>
          <p>Welcome to your identity security workspace.</p>
        </header>

        {/* Dashboard statistics. */}
        <section className="stats-grid" aria-label="Identity statistics">

          <StatCard
            title="Total Identities"
            value={1284}
            description="Registered identities"
            icon={<Users />}
          />

          <StatCard
            title="Active Users"
            value={1192}
            description="Currently active accounts"
            icon={<UserCheck />}
          />

          <StatCard
            title="Pending Requests"
            value={24}
            description="Awaiting approval"
            icon={<Clock />}
          />

          <StatCard
            title="Security Alerts"
            value={8}
            description="Require investigation"
            icon={<ShieldAlert />}
          />

        </section>

        {/* Recent identity and security activity. */}
        <section className="activity-panel">
          <h2 className="activity-heading">Recent Activity</h2>

          <ActivityItem
            category="Identity"
            actor="Admin"
            action="Created user account for"
            target="john.doe@company.com"
            time="2 minutes ago"
          />

          <ActivityItem
            category="Access"
            actor="Purity Essien"
            action="Requested access to"
            target="Finance Dashboard"
            time="15 minutes ago"
          />

          <ActivityItem
            category="Access"
            actor="Admin"
            action="Approved access request for"
            target="Michael Brown"
            time="32 minutes ago"
          />

          <ActivityItem
            category="Security"
            actor="Security System"
            action="Detected suspicious login attempt for"
            target="admin@company.com"
            time="1 hour ago"
          />

        </section>

      </main>
    </div>
  );
}

export default App;
