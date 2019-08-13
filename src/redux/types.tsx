export const TYPE_PREFIXES = {
  COINS: 'coins/'
};

export const SUFFIXES = {
  ERROR: ':ERROR',
  SUCCESS: ':SUCCESS',
};

export const COINS = {
  FETCH_COINS: 'coins/FETCH_COINS',
};

interface FetchCoinsAction {
  type: string,
  payload: {
    page?: number,
  },
};

export type CoinsActions = FetchCoinsAction;
