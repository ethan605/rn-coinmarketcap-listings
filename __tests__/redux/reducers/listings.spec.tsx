// Actions
import * as listings from 'src/redux/actions/listings';

// Reducers
import listingsReducer from 'src/redux/reducers/listings';

describe('Redux Reducers - listings', (): void => {
  const INITIAL_STATE = {
    allCoins: [],
    isFetching: false,
  };

  it('should init with default state', (): void => {
    const currentState = undefined;
    expect(listingsReducer(currentState, { type: 'ANY', payload: {} })).toEqual(INITIAL_STATE);
  });

  it('should concern fetching trigger action', (): void => {
    const newState = { ...INITIAL_STATE, isFetching: true };

    const action = listings.fetchListingsLatest({ page: 1 });
    expect(listingsReducer(INITIAL_STATE, action)).toEqual(newState);
  });

  it('should concern fetching success action', (): void => {
    const currentState = { ...INITIAL_STATE, isFetching: true };
    const coins = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const newState = { ...INITIAL_STATE, allCoins: coins, isFetching: false };

    const fetchListingsLatestSuccess = listings.fetchListingsLatestSuccess({ data: coins });
    expect(listingsReducer(currentState, fetchListingsLatestSuccess)).toEqual(newState);
  });

  it('should concern fetching error action', (): void => {
    const currentState = { ...INITIAL_STATE, isFetching: true };
    const errorMessage = 'Request failed';
    const newState = { ...INITIAL_STATE, errorMessage };

    const action = listings.fetchListingsLatestError({ errorMessage });
    expect(listingsReducer(currentState, action)).toEqual(newState);
  });
});
