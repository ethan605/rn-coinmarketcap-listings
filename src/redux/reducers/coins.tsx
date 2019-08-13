// Actions
import { COINS, SUFFIXES, CoinsActions } from '../types';

export type CoinsState = {
  allCoins: object[],
  isFetchingCoins: boolean,
};

const INITIAL_STATE: CoinsState = {
  allCoins: [],
  isFetchingCoins: false,
};

export default function coinsReducer(state: CoinsState = INITIAL_STATE, action: CoinsActions): CoinsState {
  if (action.type === COINS.FETCH_COINS) {
    return { ...state, isFetchingCoins: true };
  }
  
  // Success
  if (action.type === COINS.FETCH_COINS + SUFFIXES.SUCCESS) {
    return { ...state, isFetchingCoins: false };
  }

  // Error
  if (action.type === COINS.FETCH_COINS + SUFFIXES.ERROR) {
    return { ...state, isFetchingCoins: false };
  }

  return state;
}
