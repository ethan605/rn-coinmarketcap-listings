import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

// Utils
import Api from 'src/utils/Api';

// Actions
import * as listings from '../actions/listings';

// Types
import { LISTINGS } from '../types';

export function* fetchListingsLatestAsync(): SagaIterator {
  try {
    const data = yield call(Api.fetchListingsLatest, 1);
    console.debug('fetchListingsLatestAsync', data);
    const coinsList = [{ id: 1 }, { id: 2 }, { id: 3 }];
    yield put(listings.fetchListingsLatestSuccess({ coinsList }));
  } catch (error) {
    const { message, response } = error;
    const { data = null } = response || {};
    yield put(listings.fetchListingsLatestError({ message, meta: { data } }));
  }
}

export function* watchFetchingListingsLatest(): SagaIterator {
  yield takeLatest(LISTINGS.FETCH_LISTINGS_LATEST, fetchListingsLatestAsync);
}
