import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Profile from '../components/Profile/Profile';
import store from '../redux/configureStore';

describe('Testing if: ', () => {
  it('Profile view renders reserved rockets', () => {
    const box = render(
      <React.StrictMode>
        <Provider store={store}>
          <Profile />
        </Provider>
      </React.StrictMode>,
    );
    expect(box).toMatchSnapshot();
  });
});
