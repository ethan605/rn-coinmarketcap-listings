// Models
import ListingRecord from 'src/models/ListingRecord';

// Actions
import { LISTINGS, SUFFIXES } from '../types';
import { ReduxActions } from '../actions';

export interface ListingsState {
  allCoins: ListingRecord[];
  errorMessage?: string;
  isFetching: boolean;
}

const INITIAL_STATE: ListingsState = {
  allCoins: [],
  errorMessage: undefined,
  isFetching: false,
};

export default function listingsReducer(state: ListingsState = INITIAL_STATE, action: ReduxActions): ListingsState {
  if (action.type === LISTINGS.FETCH_LISTINGS_LATEST) {
    return { ...state, isFetching: true };
  }

  // Success
  if (action.type === LISTINGS.FETCH_LISTINGS_LATEST + SUFFIXES.SUCCESS) {
    const { data: allCoins = [] } = action.payload;
    return { ...state, allCoins, isFetching: false };
  }

  // Error
  if (action.type === LISTINGS.FETCH_LISTINGS_LATEST + SUFFIXES.ERROR) {
    const { errorMessage } = action.payload;
    return { ...state, errorMessage, isFetching: false };
  }

  return state;
}
