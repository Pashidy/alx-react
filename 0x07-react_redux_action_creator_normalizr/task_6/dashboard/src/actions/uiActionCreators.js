import React from 'react';
import { useDispatch } from 'react-redux';
import {
  boundLogin,
  boundLogout,
  boundDisplayNotificationDrawer,
  boundHideNotificationDrawer,
} from './actions/uiActionCreators'; // Import your bound actions

function UIComponent() {
  const dispatch = useDispatch();

  // Use bound actions
  const handleLogin = boundLogin(dispatch);
  const handleLogout = boundLogout(dispatch);
  const handleDisplayNotificationDrawer = boundDisplayNotificationDrawer(dispatch);
  const handleHideNotificationDrawer = boundHideNotificationDrawer(dispatch);

  // Example usage
  const onLogin = () => {
    handleLogin('user@example.com', 'password123'); // Perform login with email and password
  };

  const onLogout = () => {
    handleLogout(); // Perform logout
  };

  const onDisplayDrawer = () => {
    handleDisplayNotificationDrawer(); // Display the notification drawer
  };

  const onHideDrawer = () => {
    handleHideNotificationDrawer(); // Hide the notification drawer
  };

  return (
    <div>
      <button onClick={onLogin}>Login</button>
      <button onClick={onLogout}>Logout</button>
      <button onClick={onDisplayDrawer}>Display Notifications</button>
      <button onClick={onHideDrawer}>Hide Notifications</button>
    </div>
  );
}

export default UIComponent;
