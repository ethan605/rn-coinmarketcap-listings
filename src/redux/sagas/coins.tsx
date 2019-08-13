import { createAction } from 'redux-actions';
import { delay, put, takeEvery } from 'redux-saga/effects';

// Types
import { LISTINGS, SUFFIXES } from '../types';

export function* fetchListingsLatestAsync() {
  const successAction = createAction(LISTINGS.FETCH_LISTINGS_LATEST + SUFFIXES.SUCCESS);
  const errorAction = createAction(LISTINGS.FETCH_LISTINGS_LATEST + SUFFIXES.SUCCESS);

  try {
    console.debug('fetchListingsLatestAsync');
    const coinsData = [1, 2, 3];
    yield put(successAction({ coinsData }));
  } catch (error) {
    const { message } = error;
    yield put(errorAction({ message }));
  }
}

export function* watchFetchingListingsLatest() {
  yield takeEvery(LISTINGS.FETCH_LISTINGS_LATEST, fetchListingsLatestAsync);
}
