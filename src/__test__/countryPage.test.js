import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/store';
import CountryPage from '../../__mock__/countryPage';

describe('App components snapshots', () => {
  it('Country List renders correctly', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <CountryPage />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
