
/**
 * Sidebar
 *
 * Displays the platform identity and primary navigation.
 * Visual styling is handled separately in App.css.
 */
function Sidebar() {
  return (
    <aside className="sidebar">

      {/* Platform branding */}
      <div className="sidebar-brand">
        <div className="brand-logo">S</div>
        <span>Sentinel IAM</span>
      </div>

      {/* Primary navigation */}
      <nav className="sidebar-navigation" aria-label="Main navigation">

        <p className="navigation-label">WORKSPACE</p>

        <a href="#" className="navigation-link active">
          Overview
        </a>

        <a href="#" className="navigation-link">
          Identities
        </a>

        <a href="#" className="navigation-link">
          Access Management
        </a>

        <a href="#" className="navigation-link">
          Audit Logs
        </a>

      </nav>
    </aside>
  );
}

export default Sidebar;
