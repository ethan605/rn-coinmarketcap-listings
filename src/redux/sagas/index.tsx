import { all } from 'redux-saga/effects';

// Coins sagas
import { watchFetchingListingsLatest } from './coins';

export default function* rootSaga() {
  yield all([
    watchFetchingListingsLatest(),
  ])
}
