import 'react-native';
import { call, put, takeLatest } from 'redux-saga/effects';
import Api from 'src/utils/Api';

import { fetchListingsLatestAsync, watchFetchingListingsLatest } from 'src/redux/sagas/listings';

it('watchFetchingListingsLatest', () => {
  expect(watchFetchingListingsLatest().next().value)
    .toEqual(takeLatest('listings/FETCH_LISTINGS_LATEST', fetchListingsLatestAsync));
});

it('fetchListingsLatestAsync', () => {
  const generator = fetchListingsLatestAsync();

  expect(generator.next().value)
    .toEqual(call(Api.fetchListingsLatest, 1));

  const successAction = { type: 'listings/FETCH_LISTINGS_LATEST:SUCCESS', payload: { coinsData: [1, 2, 3] } };

  expect(generator.next().value).toEqual(put(successAction));
});