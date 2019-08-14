import { listings } from 'src/redux/actions';
import { LISTINGS, SUFFIXES } from 'src/redux/types';

describe('Redux Actions - listings', (): void => {
  it('fetchListingsLatest actions', (): void => {
    expect(listings.fetchListingsLatest({ page: 1 })).toEqual({
      type: LISTINGS.FETCH_LISTINGS_LATEST,
      payload: { page: 1 },
    });

    const coinsList = [{ id: 1 }, { id: 2 }, { id: 3 }];

    expect(listings.fetchListingsLatestSuccess({ coinsList })).toEqual({
      type: LISTINGS.FETCH_LISTINGS_LATEST + SUFFIXES.SUCCESS,
      payload: { coinsList },
    });

    const errorMessage = 'Request failed';
    const meta = { data: { status: 'failed' } };

    expect(listings.fetchListingsLatestError({ errorMessage, meta })).toEqual({
      type: LISTINGS.FETCH_LISTINGS_LATEST + SUFFIXES.ERROR,
      payload: { errorMessage, meta },
    });
  });
});
