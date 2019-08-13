import { combineReducers } from 'redux';

// Locals
import coinsReducer, { CoinsState } from './coins';

export interface ReduxState {
  coins: CoinsState;
};

export default combineReducers({
  coins: coinsReducer,
});
