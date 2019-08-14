// Actions
import { LISTINGS, SUFFIXES, FetchListingsAction } from '../types';

export interface ListingsState {
  allCoins: object[];
  isFetching: boolean;
}

const INITIAL_STATE: ListingsState = {
  allCoins: [],
  isFetching: false,
};

export default function coinsReducer(state: ListingsState = INITIAL_STATE, action: FetchListingsAction): ListingsState {
  if (action.type === LISTINGS.FETCH_LISTINGS_LATEST) {
    return { ...state, isFetching: true };
  }

  // Success
  if (action.type === LISTINGS.FETCH_LISTINGS_LATEST + SUFFIXES.SUCCESS) {
    return { ...state, isFetching: false };
  }

  // Error
  if (action.type === LISTINGS.FETCH_LISTINGS_LATEST + SUFFIXES.ERROR) {
    return { ...state, isFetching: false };
  }

  return state;
}
