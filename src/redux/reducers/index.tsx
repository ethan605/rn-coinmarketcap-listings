import { combineReducers } from 'redux';

// Locals
import listingsReducer, { ListingsState } from './listings';

export interface ReduxState {
  listings: ListingsState;
};

export default combineReducers({
  listings: listingsReducer,
});
