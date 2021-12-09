const BASE_URL = 'https://api.coinpaprika.com/v1';

export const getCoins = async () => {
  const res = await fetch(`${BASE_URL}/coins`);
  return await res.json();
};

export const getCoin = async (id: string) => {
  const res = await fetch(`${BASE_URL}/coins/${id}`);
  return await res.json();
};

export const getCoinPrice = async (id: string) => {
  const res = await fetch(`${BASE_URL}/tickers/${id}`);
  return await res.json();
};

export const getCoinOHLC = async (id: string) => {
  const res = await fetch(
    `${BASE_URL}/coins/${id}/ohlcv/historical?start=2021-01-01&limit=20`
  );
  return await res.json();
};
