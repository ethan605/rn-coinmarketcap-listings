import _ from 'lodash';

// Models
import Coin from 'src/models/Coin';

// Redux
import { listings } from 'src/redux/actions';
import { LISTINGS, SUFFIXES } from 'src/redux/types';

describe('Redux Actions - listings', () => {
  it('fetchListingsLatest plain actions', () => {
    expect(listings.fetchListingsLatest({ page: 1 })).toEqual({
      type: LISTINGS.FETCH_LISTINGS_LATEST,
      payload: { page: 1 },
    });

    const data = _.map([{ id: 1 }, { id: 2 }, { id: 3 }], Coin.parse);

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
