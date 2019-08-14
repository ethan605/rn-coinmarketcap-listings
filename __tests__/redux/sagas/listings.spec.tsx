import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
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
import listingsLatestFixtures from '../../fixtures/fetchListingsLatest.json';

describe('Redux Sagas - listings', (): void => {
  const mock = new AxiosMockAdapter(axios);
  mock.onGet('/cryptocurrency/listings/latest').reply(200, listingsLatestFixtures);

  it('should watch fetchingListingsLatest action trigger', (): void => {
    expect(watchFetchingListingsLatest().next().value).toEqual(
      takeLatest(LISTINGS.FETCH_LISTINGS_LATEST, fetchListingsLatestAsync)
    );
  });

  it('should handle effects with fetchListingsLatestAsync', (): void => {
    const page = 1;
    const generator = fetchListingsLatestAsync(listings.fetchListingsLatest({ page }));
    expect(generator.next().value).toEqual(call(Api.fetchListingsLatest, page));

    // client.get('/cryptocurrency/listings/latest').then(data => console.log('Success:', data));

    const data = [] as ListingRecord[];
    const successAction = listings.fetchListingsLatestSuccess({ data });
    expect(generator.next().value).toEqual(put(successAction));
  });
});
