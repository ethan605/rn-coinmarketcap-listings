import { createAction } from 'redux-actions';
import { LISTINGS, FetchListingsAction } from '../types';

export const fetchListingsLatest = createAction<{ page: number }>(LISTINGS.FETCH_LISTINGS_LATEST);