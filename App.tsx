/**
 * @format
 */

import React, { PureComponent } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Provider } from 'react-redux';

// Locals
import Placeholder from 'src/components/Placeholder';
import buildStore from 'src/redux';

export default class App extends PureComponent {
  store = buildStore();

  render() {
    return (
      <Provider store={this.store}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <Placeholder title="New app" />
        </SafeAreaView>
      </Provider>
    );
  }
};
