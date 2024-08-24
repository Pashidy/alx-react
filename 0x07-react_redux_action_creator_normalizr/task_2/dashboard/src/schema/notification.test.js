const getAllNotificationsByUser = (userId) => {
  const notifications = normalizedNotifications.entities.notifications;
  const messages = [];

  for (const notificationId in notifications) {
    if (notifications[notificationId].author === userId) {
      messages.push(notifications[notificationId]);
    }
  }

  return messages;
};
