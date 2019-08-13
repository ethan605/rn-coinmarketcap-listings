import { createAction } from 'redux-actions';
import { call, put, takeLatest } from 'redux-saga/effects';

// Utils
import Api from 'src/utils/Api';

// Types
import { LISTINGS, SUFFIXES } from '../types';

export function* fetchListingsLatestAsync() {
  const successAction = createAction(LISTINGS.FETCH_LISTINGS_LATEST + SUFFIXES.SUCCESS);
  const errorAction = createAction(LISTINGS.FETCH_LISTINGS_LATEST + SUFFIXES.ERROR);

  try {
    const data = yield call(Api.fetchListingsLatest, 1);
    console.debug('fetchListingsLatestAsync', data);
    const coinsData = [1, 2, 3];
    yield put(successAction({ coinsData }));
  } catch (error) {
    const { message, response } = error;
    yield put(errorAction({ message, meta: { data: response.data } }));
  }
}

export function* watchFetchingListingsLatest() {
  yield takeLatest(LISTINGS.FETCH_LISTINGS_LATEST, fetchListingsLatestAsync);
}
