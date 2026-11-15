
/**
 * StatCard
 *
 * Reusable dashboard metric card.
 */

import type { ReactNode } from 'react';

// Defines the information required by each card.
interface StatCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: ReactNode;
}

// Displays a metric using the supplied information.
function StatCard({
  title,
  value,
  description,
  icon,
}: StatCardProps) {
  return (
    <article className="stat-card">

      {/* Icon and metric title. */}
      <div className="stat-card-header">
        <h3 className="stat-title">{title}</h3>

        <div className="stat-icon">
          {icon}
        </div>
      </div>

      {/* Main metric value. */}
      <p className="stat-value">{value}</p>

      {/* Supporting information. */}
      <p className="stat-description">{description}</p>

    </article>
  );
}

export default StatCard;
