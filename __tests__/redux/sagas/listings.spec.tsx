import { call, put, takeLatest } from 'redux-saga/effects';

// Api
import Api from 'src/utils/Api';

// Models
import ListingRecord from 'src/models/ListingRecord';

// Redux
import { listings } from 'src/redux/actions';
import { fetchListingsLatestAsync, watchFetchingListingsLatest } from 'src/redux/sagas/listings';
import { LISTINGS } from 'src/redux/types';

// Fixtures
import listingsLatestFixtures from '../../fixtures/listingsLatest.json';

describe('Redux Sagas - listings', (): void => {
  it('should watch fetchingListingsLatest action trigger', (): void => {
    expect(watchFetchingListingsLatest().next().value).toEqual(
      takeLatest(LISTINGS.FETCH_LISTINGS_LATEST, fetchListingsLatestAsync)
    );
  });

  it('should handle fetchListingsLatestAsync when success', (): void => {
    const page = 1;
    const generator = fetchListingsLatestAsync(listings.fetchListingsLatest({ page }));
    expect(generator.next().value).toEqual(call(Api.fetchListingsLatest, page));

    const data = ListingRecord.deserialize(listingsLatestFixtures.data);
    const successAction = listings.fetchListingsLatestSuccess({ data, page });
    expect(generator.next({ data: listingsLatestFixtures }).value).toEqual(put(successAction));
  });

  it('should handle fetchListingsLatestAsync when error', (): void => {
    const generator = fetchListingsLatestAsync(listings.fetchListingsLatest({ page: 1 }));
    expect(generator.next().value).toEqual(call(Api.fetchListingsLatest, 1));

    const errorMessage = 'Request failed!';
    const errorAction = listings.fetchListingsLatestError({ errorMessage });

    if (generator.throw) {
      expect(generator.throw(new Error(errorMessage)).value).toEqual(put(errorAction));
    }
  });
});
