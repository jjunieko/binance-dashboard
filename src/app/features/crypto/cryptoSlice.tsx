import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PriceData {
  time: number;
  price: number;
}

interface CryptoPrice {
  last: number;
  change: number;
  timestamp: number;
  data: PriceData[];
}

const initialState: { [key: string]: CryptoPrice } = {
  btcusdt: { last: 0, change: 0, timestamp: 0, data: [] },
  ethusdt: { last: 0, change: 0, timestamp: 0, data: [] },
  solusdt: { last: 0, change: 0, timestamp: 0, data: [] },
  dogeusdt: { last: 0, change: 0, timestamp: 0, data: [] },
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updatePrice: (state, action: PayloadAction<{ symbol: string; price: number }>) => {
      const { symbol, price } = action.payload;
      const currentTime = Date.now();
      const crypto = state[symbol];
      if (!crypto) {
        state[symbol] = { last: price, change: 0, timestamp: currentTime, data: [] };
      } else {
        const lastPrice = crypto.last;
        crypto.last = price;
        crypto.change = ((price - lastPrice) / lastPrice) * 100;
        crypto.timestamp = currentTime;
        crypto.data.push({ time: currentTime, price });
      }
    },
  },
});

export const { updatePrice } = cryptoSlice.actions;
export default cryptoSlice.reducer;