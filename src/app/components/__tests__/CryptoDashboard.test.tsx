// src/app/components/__tests__/CryptoDashboard.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CryptoDashboard from '../CryptoDashboard';
import * as cryptoApi from '../../features/crypto/cryptoApi';

const mockStore = configureStore([]);

describe('CryptoDashboard', () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      crypto: {
        btcusdt: {
          last: 35000,
          change: 1.5,
          timestamp: Date.now(),
          data: [{ time: '2023-05-01T00:00:00Z', price: 34000 }, { time: '2023-05-02T00:00:00Z', price: 35000 }]
        },
        ethusdt: {
          last: 2500,
          change: -0.5,
          timestamp: Date.now(),
          data: [{ time: '2023-05-01T00:00:00Z', price: 2400 }, { time: '2023-05-02T00:00:00Z', price: 2500 }]
        }
      }
    });

    // Mock the setupWebSocket function
    jest.spyOn(cryptoApi, 'setupWebSocket').mockImplementation(jest.fn());
  });

  it('renders without crashing', () => {
    const { getByText } = render(
      <Provider store={store}>
        <CryptoDashboard />
      </Provider>
    );

    expect(getByText('Dashboard')).toBeInTheDocument();
    expect(getByText('BTCUSDT')).toBeInTheDocument();
    expect(getByText('ETHUSDT')).toBeInTheDocument();
    expect(getByText('Last Price: $35000.00')).toBeInTheDocument();
    expect(getByText('Change: 1.50%')).toBeInTheDocument();
  });
});