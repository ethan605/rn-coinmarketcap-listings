import { all } from 'redux-saga/effects';

// Coins sagas
import { watchIncrementAsync } from './coins';

export default function* rootSaga() {
  yield all([
    watchIncrementAsync(),
  ])
}
