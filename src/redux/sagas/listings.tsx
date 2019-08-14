import { Action } from 'redux-actions';
import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

// Utils
import Api from 'src/utils/Api';

// Actions
import * as listings from '../actions/listings';

// Types
import { LISTINGS, FetchListingsPayload } from '../types';

export function* fetchListingsLatestAsync(action?: Action<FetchListingsPayload>): SagaIterator {
  if (action == null) {
    return;
  }

  try {
    const { page = 1 } = action.payload;
    const data = yield call(Api.fetchListingsLatest, page);
    const { coinsList = [{ id: 1 }, { id: 2 }, { id: 3 }] } = data || {};
    yield put(listings.fetchListingsLatestSuccess({ coinsList }));
  } catch (error) {
    const { message: errorMessage, response } = error;
    const { data = null } = response || {};
    yield put(listings.fetchListingsLatestError({ errorMessage, meta: { data } }));
  }
}

export function* watchFetchingListingsLatest(): SagaIterator {
  yield takeLatest(LISTINGS.FETCH_LISTINGS_LATEST, fetchListingsLatestAsync);
}
