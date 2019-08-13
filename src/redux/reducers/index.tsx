import { combineReducers } from 'redux';

// Locals
import coinsReducer from './coins';

export default combineReducers({
  coins: coinsReducer,
});
