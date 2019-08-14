import _ from 'lodash';
import { Action } from 'redux-actions';
import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

// Models
import ListingRecord from 'src/models/ListingRecord';

// Utils
import Api from 'src/utils/Api';

// Actions
import { listings, FetchListingsPayload } from '../actions';

// Types
import { LISTINGS } from '../types';

export function* fetchListingsLatestAsync(action: Action<FetchListingsPayload>): SagaIterator {
  const { page = 1, promise } = action.payload;
  const { resolve = null, reject = null } = promise || {};

  try {
    const response = yield call(Api.fetchListingsLatest, page);
    const data = ListingRecord.parse(_.get(response, 'data.data'));
    yield put(listings.fetchListingsLatestSuccess({ data }));
    resolve != null && resolve(data);
  } catch (error) {
    yield put(listings.fetchListingsLatestError({ errorMessage: error.message }));
    reject != null && reject(error);
  }
}

export function* watchFetchingListingsLatest(): SagaIterator {
  yield takeLatest(LISTINGS.FETCH_LISTINGS_LATEST, fetchListingsLatestAsync);
}
