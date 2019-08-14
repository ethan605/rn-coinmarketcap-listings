/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
// import { call, put } from 'redux-saga/effects';
// import { SagaIterator } from 'redux-saga';

import App from '../App';

describe('App', (): void => {
  it('renders correctly', (): void => {
    const snapshot = renderer.create(<App />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});

// describe('Experimentials', (): void => {
//   function doubler(num: number): Promise<number> {
//     return new Promise<number>(
//       (resolve): void => {
//         console.debug('inside doubler:', num);
//         resolve(num * 2);
//       }
//     );
//   }

//   function* main(num: number): SagaIterator {
//     const val = yield call(doubler, num);
//     yield put({ type: 'TEST:SUCCESS', payload: val });
//   }

//   function incrementor(otherGenerator: (num: number) => SagaIterator): (num: number) => SagaIterator {
//     function* generator(num: number): SagaIterator {
//       yield put({ type: 'TEST', payload: num + 1 });
//       yield* otherGenerator(num);
//     }

//     return generator;
//   }

//   const generator = incrementor(main)(3);
//   console.debug(generator.next().value);
//   console.debug(generator.next().value);
//   console.debug(generator.next().value);
// });
