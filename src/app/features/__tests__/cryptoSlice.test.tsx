import cryptoReducer, { updatePrice } from '../crypto/cryptoSlice';

describe('cryptoSlice', () => {
  describe('reducers', () => {
    it('should handle initial state', () => {
      expect(cryptoReducer(undefined, { type: 'unknown' })).toEqual({
        btcusdt: { last: 0, change: 0, timestamp: 0, data: [] },
        ethusdt: { last: 0, change: 0, timestamp: 0, data: [] },
        solusdt: { last: 0, change: 0, timestamp: 0, data: [] },
        dogeusdt: { last: 0, change: 0, timestamp: 0, data: [] },
      });
    });

    it('should handle updatePrice', () => {
      const actual = cryptoReducer({
        btcusdt: { last: 50000, change: 5, timestamp: 1609459200000, data: [] },
        ethusdt: { last: 1500, change: -3, timestamp: 1609459200000, data: [] },
        solusdt: { last: 130, change: 2, timestamp: 1609459200000, data: [] },
        dogeusdt: { last: 0.05, change: 0, timestamp: 1609459200000, data: [] },
      }, updatePrice({ symbol: 'btcusdt', price: 51000 }));

      expect(actual.btcusdt.last).toEqual(51000);
      expect(actual.btcusdt.change).toBeCloseTo(2.0);
      expect(actual.btcusdt.data.length).toBe(1);
      expect(actual.btcusdt.data[0].price).toEqual(51000);
    });
  });
});