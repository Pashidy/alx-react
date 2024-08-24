import { normalize, schema } from 'normalizr';
import notificationsData from '../notifications.json';

// Define user entity
const user = new schema.Entity('users');

// Define message entity with 'guid' as the idAttribute
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });

// Define notification entity with relationships
const notification = new schema.Entity(
  'notifications',
  {
    author: user,
    context: message,
  }
);

// Normalize the notifications data
const normalizedData = normalize(notificationsData, [notification]);

export { normalizedData, user, message, notification };
