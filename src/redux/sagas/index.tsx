import { all } from 'redux-saga/effects';

// Coins sagas
import { watchFetchingListingsLatest } from './listings';

export default function* rootSaga() {
  yield all([
    watchFetchingListingsLatest(),
  ])
}
