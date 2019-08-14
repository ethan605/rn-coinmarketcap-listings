import { Action } from 'redux-actions';
import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

// Utils
import Api from 'src/utils/Api';

// Actions
import { listings, FetchListingsPayload } from '../actions';

// Types
import { LISTINGS } from '../types';

export function* fetchListingsLatestAsync(action?: Action<FetchListingsPayload>): SagaIterator {
  if (action == null) {
    return;
  }

  const { resolve = null, reject = null } = action.payload.meta || {};

  try {
    const { page = 1 } = action.payload;
    const data = yield call(Api.fetchListingsLatest, page);
    const coinsList: object[] = [{ id: 1 }, { id: 2 }, { id: 3 }];
    yield put(listings.fetchListingsLatestSuccess({ data: coinsList }));
    resolve != null && resolve(data);
  } catch (error) {
    reject != null && reject(error);
    const { message: errorMessage } = error;
    yield put(listings.fetchListingsLatestError({ errorMessage }));
  }
}

export function* watchFetchingListingsLatest(): SagaIterator {
  yield takeLatest(LISTINGS.FETCH_LISTINGS_LATEST, fetchListingsLatestAsync);
}
