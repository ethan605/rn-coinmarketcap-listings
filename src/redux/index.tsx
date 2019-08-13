import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

// Locals
import reducers from './reducers';

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

  return createStore(reducers, enhancer);
}
