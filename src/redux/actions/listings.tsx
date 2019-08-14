import { createAction } from 'redux-actions';
import { LISTINGS, SUFFIXES } from '../types';

export const fetchListingsLatest = createAction<{ page: number }>(LISTINGS.FETCH_LISTINGS_LATEST);
export const fetchListingsLatestSuccess = createAction<{ coinsList: object[] }>(
  LISTINGS.FETCH_LISTINGS_LATEST + SUFFIXES.SUCCESS
);
export const fetchListingsLatestError = createAction<{ message: string; meta: object }>(
  LISTINGS.FETCH_LISTINGS_LATEST + SUFFIXES.ERROR
);
