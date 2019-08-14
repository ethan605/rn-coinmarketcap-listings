import _ from 'lodash';
import { call, put, takeLatest } from 'redux-saga/effects';

// Api
import Api from 'src/utils/Api';

// Models
import Coin from 'src/models/Coin';

// Redux
import { listings } from 'src/redux/actions';
import { fetchListingsLatestAsync, watchFetchingListingsLatest } from 'src/redux/sagas/listings';
import { LISTINGS } from 'src/redux/types';

// Fixtures
import listingsLatestFixtures from '../../fixtures/listingsLatest.json';

describe('Redux Sagas - listings', () => {
  it('should watch fetchingListingsLatest action trigger', () => {
    expect(watchFetchingListingsLatest().next().value).toEqual(
      takeLatest(LISTINGS.FETCH_LISTINGS_LATEST, fetchListingsLatestAsync)
    );
  });

  it('should handle fetchListingsLatestAsync when success', () => {
    const page = 1;
    const generator = fetchListingsLatestAsync(listings.fetchListingsLatest({ page }));
    expect(generator.next().value).toEqual(call(Api.fetchListingsLatest, page));

    const data = _.map(listingsLatestFixtures.data, Coin.parse);
    const successAction = listings.fetchListingsLatestSuccess({ data, page });
    expect(generator.next({ data: listingsLatestFixtures }).value).toEqual(put(successAction));
  });

  it('should handle fetchListingsLatestAsync when error', () => {
    const generator = fetchListingsLatestAsync(listings.fetchListingsLatest({ page: 1 }));
    expect(generator.next().value).toEqual(call(Api.fetchListingsLatest, 1));

    const errorMessage = 'Request failed!';
    const errorAction = listings.fetchListingsLatestError({ errorMessage });

    if (generator.throw) {
      expect(generator.throw(new Error(errorMessage)).value).toEqual(put(errorAction));
    }
  });

  test('fetchListingsLatest promise success', async () => {
    const promise = new Promise<Coin[]>(
      (resolve, reject): void => {
        const page = 1;
        const generator = fetchListingsLatestAsync(
          listings.fetchListingsLatest({ page, promise: { resolve, reject } })
        );
        generator.next();
        generator.next({ data: listingsLatestFixtures });
        generator.next();
      }
    );

    try {
      const data = await promise;
      expect(data.length).toEqual(10);
      _.each(data, item => expect(item instanceof Coin).toBeTruthy());
    } catch (error) {}
  });

  it('fetchListingsLatest promise error', async () => {
    const promise = new Promise<Coin[]>(
      (resolve, reject): void => {
        const page = 1;
        const generator = fetchListingsLatestAsync(
          listings.fetchListingsLatest({ page, promise: { resolve, reject } })
        );
        generator.next();
        if (generator.throw) {
          generator.throw(new Error('Request failed'));
        }
        generator.next();
      }
    );

    try {
      await promise;
    } catch (error) {
      expect(error instanceof Error).toBeTruthy();
      expect(error.message).toEqual('Request failed');
    }
  });
});
