import { createAction } from 'redux-actions';

// Locals
import { LISTINGS, SUFFIXES } from '../types';
import { FetchListingsPayload } from './typings';

export const fetchListingsLatest = createAction<FetchListingsPayload>(LISTINGS.FETCH_LISTINGS_LATEST);
export const fetchListingsLatestSuccess = createAction<FetchListingsPayload>(
  LISTINGS.FETCH_LISTINGS_LATEST + SUFFIXES.SUCCESS
);
export const fetchListingsLatestError = createAction<FetchListingsPayload>(
  LISTINGS.FETCH_LISTINGS_LATEST + SUFFIXES.ERROR
);
