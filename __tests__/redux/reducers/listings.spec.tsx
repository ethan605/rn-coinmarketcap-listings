import _ from 'lodash';

// Models
import Coin from 'src/models/Coin';

// Redux
import * as listings from 'src/redux/actions/listings';
import listingsReducer from 'src/redux/reducers/listings';

describe('Redux Reducers - listings', () => {
  const INITIAL_STATE = {
    allCoins: [],
    isFetching: false,
  };

  it('should init with default state', () => {
    const currentState = undefined;
    expect(listingsReducer(currentState, { type: 'ANY', payload: {} })).toEqual(INITIAL_STATE);
  });

  it('should concern fetching trigger action', () => {
    const newState = { ...INITIAL_STATE, isFetching: true };

    const action = listings.fetchListingsLatest({ page: 1 });
    expect(listingsReducer(INITIAL_STATE, action)).toEqual(newState);
  });

  it('should concern fetching success action on page 1', () => {
    const currentState = { ...INITIAL_STATE, isFetching: true };
    const coins = _.map([{ id: 1 }, { id: 2 }, { id: 3 }], Coin.parse);
    const newState = { ...INITIAL_STATE, allCoins: coins, isFetching: false };

    const fetchListingsLatestSuccess = listings.fetchListingsLatestSuccess({ data: coins, page: 1 });
    expect(listingsReducer(currentState, fetchListingsLatestSuccess)).toEqual(newState);
  });

  it('should concern fetching success action on page 2', () => {
    const currentCoins = _.map([{ id: 1 }, { id: 2 }, { id: 3 }], Coin.parse);
    const newCoins = _.map([{ id: 4 }, { id: 5 }, { id: 6 }], Coin.parse);
    const currentState = { ...INITIAL_STATE, allCoins: currentCoins, isFetching: true };
    const newState = { ...INITIAL_STATE, allCoins: [...currentCoins, ...newCoins], isFetching: false };

    const fetchListingsLatestSuccess = listings.fetchListingsLatestSuccess({ data: newCoins, page: 2 });
    expect(listingsReducer(currentState, fetchListingsLatestSuccess)).toEqual(newState);
  });

  it('should concern fetching error action', () => {
    const currentState = { ...INITIAL_STATE, isFetching: true };
    const errorMessage = 'Request failed';
    const newState = { ...INITIAL_STATE, errorMessage };

    const action = listings.fetchListingsLatestError({ errorMessage });
    expect(listingsReducer(currentState, action)).toEqual(newState);
  });
});
