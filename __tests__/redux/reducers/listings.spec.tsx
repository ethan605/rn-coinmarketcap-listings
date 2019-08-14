// Actions
import * as listings from 'src/redux/actions/listings';

// Reducers
import listingsReducer from 'src/redux/reducers/listings';

describe('Redux Reducers - listings', (): void => {
  it('initial state', (): void => {
    const initialState = {
      allCoins: [],
      isFetching: false,
    };

    expect(listingsReducer(undefined, { type: 'ANY' })).toEqual(initialState);

    const fetchListingsLatest = listings.fetchListingsLatest({ page: 1 });
    const fetchingState = { ...initialState, isFetching: true };
    expect(listingsReducer(initialState, fetchListingsLatest)).toEqual(fetchingState);

    const coins = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const fetchListingsLatestSuccess = listings.fetchListingsLatestSuccess({ coinsList: coins });
    expect(listingsReducer(fetchingState, fetchListingsLatestSuccess)).toEqual({ ...initialState, allCoins: coins });
  });
});
