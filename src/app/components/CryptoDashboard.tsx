import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { setupWebSocket } from '../features/crypto/cryptoApi';
import LoadingComponent from '../utils/Loading';
import CryptoChart from './CryptoChart';

const CryptoDashboard: React.FC = () => {
  const prices = useSelector((state: any) => state.crypto);

  useEffect(() => {
    setupWebSocket();
  }, []);

  if (!prices) return <LoadingComponent />;

  return (
    <div className='flex flex-col items-center p-4 gap-4'>
      <h1 className='bold'>Dashboard</h1>
      <div className="flex flex-row items-center p-4 gap-4">
        {Object.keys(prices).map((key) => (
          prices[key] && (
            <div key={key} className="bg-gray-200 rounded-lg shadow-lg p-4 max-w-sm w-full space-y-4">
              <h2>{key.toUpperCase()}</h2>
              <p>Last Price: ${prices[key].last.toFixed(2)}</p>
              <p>Change: {prices[key].change.toFixed(2)}%</p>
              <p>Updated at: {new Date(prices[key].timestamp).toLocaleTimeString()}</p>
              {/* {prices[key].data && prices[key].data.length > 1 && (
              <CryptoChart data={prices[key].data} />
            )} */}
            </div>
          )
        ))}
      </div>
    </div>
  );
}

export default CryptoDashboard;