import { updatePrice } from '../crypto/cryptoSlice';
import { store } from '../redux/store';

describe('Redux Store', () => {
  it('should handle initial state', () => {
    expect(store.getState().crypto).toEqual({
      btcusdt: {
        last: 0,
        change: 0,
        timestamp: 0,
        data: []
      },
      ethusdt: {
        last: 0,
        change: 0,
        timestamp: 0,
        data: []
      },
      solusdt: {
        last: 0,
        change: 0,
        timestamp: 0,
        data: []
      },
      dogeusdt: {
        last: 0,
        change: 0,
        timestamp: 0,
        data: []
      }
    });
  });

  it('should handle updating prices', () => {
    // Initial dispatch to simulate existing state
    store.dispatch(updatePrice({ symbol: 'btcusdt', price: 50000 }));
    store.dispatch(updatePrice({ symbol: 'ethusdt', price: 1500 }));

    store.dispatch(updatePrice({ symbol: 'btcusdt', price: 51000 }));

    const updatedBTCUSDT = store.getState().crypto.btcusdt;
    expect(updatedBTCUSDT.last).toEqual(51000);
  });
});