import { createAction } from 'redux-actions';
import { LISTINGS, SUFFIXES, FetchListingsPayload } from '../types';

export const fetchListingsLatest = createAction<FetchListingsPayload>(LISTINGS.FETCH_LISTINGS_LATEST);
export const fetchListingsLatestSuccess = createAction<FetchListingsPayload>(
  LISTINGS.FETCH_LISTINGS_LATEST + SUFFIXES.SUCCESS
);
export const fetchListingsLatestError = createAction<FetchListingsPayload>(
  LISTINGS.FETCH_LISTINGS_LATEST + SUFFIXES.ERROR
);
