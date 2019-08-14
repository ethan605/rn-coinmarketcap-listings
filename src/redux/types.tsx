import { Action } from 'redux-actions';

export const TYPE_PREFIXES = {
  LISTINGS: 'listings/',
};

export const SUFFIXES = {
  ERROR: ':ERROR',
  SUCCESS: ':SUCCESS',
};

export const LISTINGS = {
  FETCH_LISTINGS_LATEST: 'listings/FETCH_LISTINGS_LATEST',
};

export interface FetchListingsPayload {
  coinsList?: object[];
  errorMessage?: string;
  meta?: object;
  page?: number;
}

export type ReduxActions = Action<FetchListingsPayload>;
