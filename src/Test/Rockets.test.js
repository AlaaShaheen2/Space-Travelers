import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Rockets from '../components/Rockets/Rockets';

describe('Test if: ', () => {
  it('Rockets component renders', () => {
    const box = render(
      <React.StrictMode>
        <Provider store={store}>
          <Rockets />
        </Provider>
      </React.StrictMode>,
    );
    expect(box).toMatchSnapshot();
  });
});
