
/**
 * ActivityItem
 *
 * Displays one categorized identity-related event.
 */

interface ActivityItemProps {
  actor: string;
  action: string;
  target: string;
  time: string;
  category: 'Identity' | 'Access' | 'Security';
}

function ActivityItem({
  actor,
  action,
  target,
  time,
  category,
}: ActivityItemProps) {
  return (
    <article className="activity-item">

      {/* Event category. */}
      <span className={`activity-category ${category.toLowerCase()}`}>
        {category}
      </span>

      {/* Person responsible for the action. */}
      <p className="activity-actor">{actor}</p>

      {/* Action and affected resource. */}
      <p className="activity-action">
        {action} <strong>{target}</strong>
      </p>

      {/* Event timestamp. */}
      <time className="activity-time">{time}</time>

    </article>
  );
}

export default ActivityItem;
