// import 'react-native';
import { call, put, takeLatest } from 'redux-saga/effects';
import Api from 'src/utils/Api';

import { fetchListingsLatestAsync, watchFetchingListingsLatest } from 'src/redux/sagas/listings';
import { LISTINGS, SUFFIXES } from 'src/redux/types';

describe('Redux Sagas - listings', (): void => {
  it('watchFetchingListingsLatest', (): void => {
    expect(watchFetchingListingsLatest().next().value).toEqual(
      takeLatest(LISTINGS.FETCH_LISTINGS_LATEST, fetchListingsLatestAsync)
    );
  });

  it('fetchListingsLatestAsync - success', (): void => {
    const generator = fetchListingsLatestAsync();
    expect(generator.next().value).toEqual(call(Api.fetchListingsLatest, 1));

    const successAction = {
      type: LISTINGS.FETCH_LISTINGS_LATEST + SUFFIXES.SUCCESS,
      payload: { coinsList: [{ id: 1 }, { id: 2 }, { id: 3 }] },
    };
    expect(generator.next().value).toEqual(put(successAction));
  });
});
