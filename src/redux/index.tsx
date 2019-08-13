import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

// Reducers
import reducers, { ReduxState } from './reducers';

// Sagas
import rootSaga from './sagas';

export type ReduxState = ReduxState;

export default function buildStore() {
  const composeEnhancers =
    // @ts-ignore
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ != null
      // @ts-ignore
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  const sagaMiddleware = createSagaMiddleware();

  const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
  );

  const store = createStore(reducers, enhancer);

  sagaMiddleware.run(rootSaga);

  return store;
}
