import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/store';
import CountryList from '../../__mock__/countryList';

describe('App components snapshots', () => {
  it('Country List renders correctly', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <CountryList />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
