export const TYPE_PREFIXES = {
  COINS: 'coins/'
};

export const SUFFIXES = {
  ERROR: ':ERROR',
  SUCCESS: ':SUCCESS',
};

export const LISTINGS = {
  FETCH_LISTINGS_LATEST: 'coins/FETCH_LISTINGS_LATEST',
};

export interface FetchListingsAction {
  type: string;
  payload: {
    coinsList?: object[];
    errorMessage?: string;
    page?: number;
  },
};

export type ListingsActions = FetchListingsAction;
