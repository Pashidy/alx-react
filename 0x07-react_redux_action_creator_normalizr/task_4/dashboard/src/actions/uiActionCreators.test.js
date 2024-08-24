import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
} from './uiActionCreators';
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

describe('UI Action Creators', () => {
  it('login should create an action with LOGIN type and user object', () => {
    const email = 'test@example.com';
    const password = 'password123';
    const expectedAction = {
      type: LOGIN,
      user: { email, password },
    };
    expect(login(email, password)).toEqual(expectedAction);
  });

  it('logout should create an action with LOGOUT type', () => {
    const expectedAction = { type: LOGOUT };
    expect(logout()).toEqual(expectedAction);
  });

  it('displayNotificationDrawer should create an action with DISPLAY_NOTIFICATION_DRAWER type', () => {
    const expectedAction = { type: DISPLAY_NOTIFICATION_DRAWER };
    expect(displayNotificationDrawer()).toEqual(expectedAction);
  });

  it('hideNotificationDrawer should create an action with HIDE_NOTIFICATION_DRAWER type', () => {
    const expectedAction = { type: HIDE_NOTIFICATION_DRAWER };
    expect(hideNotificationDrawer()).toEqual(expectedAction);
  });
});
