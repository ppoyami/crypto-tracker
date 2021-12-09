const BASE_URL = 'https://api.coinpaprika.com/v1';

export const getCoins = async () => {
  const res = await fetch(`${BASE_URL}/coins`);
  return await res.json();
};
