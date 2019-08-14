import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import { createAction } from 'redux-actions';

// Utils
import Api from 'src/utils/Api';

// Types
import { LISTINGS, SUFFIXES } from '../types';

export function* fetchListingsLatestAsync(): SagaIterator {
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

export function* watchFetchingListingsLatest(): SagaIterator {
  yield takeLatest(LISTINGS.FETCH_LISTINGS_LATEST, fetchListingsLatestAsync);
}
