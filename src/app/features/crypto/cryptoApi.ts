import { store } from "../redux/store";
import { updatePrice } from "./cryptoSlice";

export const setupWebSocket = () => {
  const conn = new WebSocket('wss://stream.binance.com:9443/ws');

  conn.onopen = () => {
    conn.send(JSON.stringify({
      method: "SUBSCRIBE",
      params: ['btcusdt@ticker', 'ethusdt@ticker', 'solusdt@ticker', 'dogeusdt@ticker'],
      id: 1
    }));
  };

  conn.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.s && data.c) {
      const symbol = data.s.toLowerCase();
      const price = parseFloat(data.c);
      store.dispatch(updatePrice({ symbol, price }));
    } else {
      console.error('Received incomplete data:', data);
    }
  };

  conn.onerror = (error) => {
    console.error('WebSocket error:', error);
  };

  conn.onclose = () => {
    console.log('WebSocket disconnected. Attempting to reconnect...');
    setTimeout(setupWebSocket, 2000); // Reconnect every 2 seconds
  };
}