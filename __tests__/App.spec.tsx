/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

describe('App', (): void => {
  it('renders correctly', (): void => {
    const snapshot = renderer.create(<App />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
