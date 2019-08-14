import { all, AllEffect } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/types';

// Coins sagas
import { watchFetchingListingsLatest } from './listings';

export default function* rootSaga(): IterableIterator<AllEffect<SagaIterator>> {
  yield all([watchFetchingListingsLatest()]);
}
