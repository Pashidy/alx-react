import React from 'react';
import { useDispatch } from 'react-redux';
import { boundMarkAsRead, boundSetNotificationFilter } from './actions/notificationActionCreators'; // Import your bound actions

function NotificationsComponent() {
  const dispatch = useDispatch();

  // Use bound actions
  const handleMarkAsRead = boundMarkAsRead(dispatch);
  const handleSetNotificationFilter = boundSetNotificationFilter(dispatch);

  // Example usage
  const onMarkAsRead = () => {
    handleMarkAsRead(1); // Mark notification with index 1 as read
  };

  const onSetFilter = () => {
    handleSetNotificationFilter('DEFAULT'); // Set the notification filter to 'DEFAULT'
  };

  return (
    <div>
      <button onClick={onMarkAsRead}>Mark as Read</button>
      <button onClick={onSetFilter}>Set Filter</button>
    </div>
  );
}

export default NotificationsComponent;
