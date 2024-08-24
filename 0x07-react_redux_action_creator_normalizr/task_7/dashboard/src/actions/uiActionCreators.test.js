import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { loginRequest } from './uiActionCreators';
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('loginRequest action', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should dispatch LOGIN and LOGIN_SUCCESS when API call is successful', () => {
    fetchMock.getOnce('/dist/login-success.json', {
      body: { success: true },
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: LOGIN, user: { email: 'user@example.com', password: 'password123' } },
      { type: LOGIN_SUCCESS },
    ];
    const store = mockStore({});

    return store.dispatch(loginRequest('user@example.com', 'password123')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch LOGIN and LOGIN_FAILURE when API call fails', () => {
    fetchMock.getOnce('/dist/login-success.json', {
      throws: new Error('API request failed'),
    });

    const expectedActions = [
      { type: LOGIN, user: { email: 'user@example.com', password: 'password123' } },
      { type: LOGIN_FAILURE },
    ];
    const store = mockStore({});

    return store.dispatch(loginRequest('user@example.com', 'password123')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
