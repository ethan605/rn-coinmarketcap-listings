import { applyMiddleware, compose, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';

// Reducers
import reducers, { ReduxState } from './reducers';

// Sagas
import rootSaga from './sagas';

export type ReduxState = ReduxState;

/* eslint-disable prettier/prettier */

export default function buildStore(): Store<ReduxState> {
  // @ts-ignore
  const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ != null ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

  const sagaMiddleware = createSagaMiddleware();

  const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

  const store = createStore(reducers, enhancer);

  sagaMiddleware.run(rootSaga);

  return store;
}
