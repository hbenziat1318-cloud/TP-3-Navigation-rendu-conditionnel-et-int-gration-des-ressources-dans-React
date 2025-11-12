import { useState } from 'react';

function Notifications() {
  const [notifications, setNotifications] = useState(3);

  return (
    <div className="notifications-container">
      {notifications > 0 && (
        <p>🔔 Vous avez {notifications} notification(s) <span className="badge">Nouveau</span></p>
      )}
      <button onClick={() => setNotifications(notifications + 1)}>
        📩 Ajouter une notification
      </button>
      {notifications > 0 && (
        <button onClick={() => setNotifications(0)} style={{marginLeft: '10px', background: 'var(--danger-color)'}}>
          ✅ Tout marquer comme lu
        </button>
      )}
    </div>
  );
}

export default Notifications;
