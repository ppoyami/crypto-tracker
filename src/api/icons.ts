const BASE_URL = 'https://cryptoicon-api.vercel.app/api/icon';

export const getIconURL = (symbol: string): string => {
  return `${BASE_URL}/${symbol.toLowerCase()}`;
};
