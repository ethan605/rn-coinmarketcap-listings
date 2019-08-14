// Actions
import { LISTINGS, SUFFIXES, ReduxActions } from '../types';

export interface ListingsState {
  allCoins: object[];
  isFetching: boolean;
}

const INITIAL_STATE: ListingsState = {
  allCoins: [],
  isFetching: false,
};

export default function coinsReducer(state: ListingsState = INITIAL_STATE, action: ReduxActions): ListingsState {
  if (action.type === LISTINGS.FETCH_LISTINGS_LATEST) {
    return { ...state, isFetching: true };
  }

  // Success
  if (action.type === LISTINGS.FETCH_LISTINGS_LATEST + SUFFIXES.SUCCESS) {
    const { coinsList: allCoins = [] } = action.payload;
    return { ...state, allCoins, isFetching: false };
  }

  // Error
  if (action.type === LISTINGS.FETCH_LISTINGS_LATEST + SUFFIXES.ERROR) {
    return { ...state, isFetching: false };
  }

  return state;
}
