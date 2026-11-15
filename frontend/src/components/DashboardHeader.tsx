
/**
 * DashboardHeader
 *
 * Displays the application's top navigation,
 * search field, notifications and administrator profile.
 */

import { Bell, Search } from 'lucide-react';

function DashboardHeader() {
  return (
    <header className="dashboard-header">

      {/* Application search. */}
      <div className="header-search">
        <Search size={18} aria-hidden="true" />

        <input
          type="search"
          placeholder="Search identities, roles..."
          aria-label="Search identities and roles"
        />
      </div>

      {/* Administrator controls. */}
      <div className="header-actions">

        {/* Notification control. */}
        <button
          className="notification-button"
          type="button"
          aria-label="Notifications"
        >
          <Bell size={20} aria-hidden="true" />
          <span className="notification-indicator" />
        </button>

        {/* Administrator profile. */}
        <div className="admin-profile">
          <div className="admin-avatar">A</div>

          <div className="admin-details">
            <span className="admin-name">Administrator</span>
            <span className="admin-role">System Admin</span>
          </div>
        </div>

      </div>
    </header>
  );
}

export default DashboardHeader;
