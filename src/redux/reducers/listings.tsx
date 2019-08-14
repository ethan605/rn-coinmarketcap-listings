// Models
import Coin from 'src/models/Coin';

// Actions
import { LISTINGS, SUFFIXES } from '../types';
import { ReduxActions } from '../actions';

export interface ListingsState {
  allCoins: Coin[];
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
    const { data: newCoins = [], page = 1 } = action.payload;
    const { allCoins: currentCoins } = state;
    const allCoins = page <= 1 ? newCoins : [...currentCoins, ...newCoins];
    return { ...state, allCoins, isFetching: false };
  }

  // Error
  if (action.type === LISTINGS.FETCH_LISTINGS_LATEST + SUFFIXES.ERROR) {
    const { errorMessage } = action.payload;
    return { ...state, errorMessage, isFetching: false };
  }

  return state;
}
