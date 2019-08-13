/**
 * @format
 */

import React, { PureComponent } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Provider } from 'react-redux';

// Locals
import PlaceholderScreen from 'src/components/PlaceholderScreen';
import buildStore from 'src/redux';

export default class App extends PureComponent {
  store = buildStore();

  render() {
    return (
      <Provider store={this.store}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <PlaceholderScreen />
        </SafeAreaView>
      </Provider>
    );
  }
};
