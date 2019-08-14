import { call, takeLatest } from 'redux-saga/effects';
import Api from 'src/utils/Api';

import { listings } from 'src/redux/actions';
import { fetchListingsLatestAsync, watchFetchingListingsLatest } from 'src/redux/sagas/listings';
import { LISTINGS } from 'src/redux/types';

describe('Redux Sagas - listings', (): void => {
  it('should watch fetchingListingsLatest action trigger', (): void => {
    expect(watchFetchingListingsLatest().next().value).toEqual(
      takeLatest(LISTINGS.FETCH_LISTINGS_LATEST, fetchListingsLatestAsync)
    );
  });

  it('should handle effects with fetchListingsLatestAsync', (): void => {
    const page = 1;
    const generator = fetchListingsLatestAsync(listings.fetchListingsLatest({ page }));
    expect(generator.next().value).toEqual(call(Api.fetchListingsLatest, page));

    // const data = [{ id: 1 }, { id: 2 }, { id: 3 }];
    // const successAction = listings.fetchListingsLatestSuccess({ data });
    // expect(generator.next().value).toEqual(put(successAction));
  });
});
