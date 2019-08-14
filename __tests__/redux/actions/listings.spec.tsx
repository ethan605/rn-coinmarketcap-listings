import { listings } from 'src/redux/actions';
import { LISTINGS, SUFFIXES } from 'src/redux/types';
import Coin from 'src/models/Coin';

describe('Redux Actions - listings', (): void => {
  it('fetchListingsLatest actions', (): void => {
    expect(listings.fetchListingsLatest({ page: 1 })).toEqual({
      type: LISTINGS.FETCH_LISTINGS_LATEST,
      payload: { page: 1 },
    });

    const data = Coin.parse([{ id: 1 }, { id: 2 }, { id: 3 }]);

    expect(listings.fetchListingsLatestSuccess({ data })).toEqual({
      type: LISTINGS.FETCH_LISTINGS_LATEST + SUFFIXES.SUCCESS,
      payload: { data },
    });

    const errorMessage = 'Request failed';

    expect(listings.fetchListingsLatestError({ errorMessage })).toEqual({
      type: LISTINGS.FETCH_LISTINGS_LATEST + SUFFIXES.ERROR,
      payload: { errorMessage },
    });
  });
});
