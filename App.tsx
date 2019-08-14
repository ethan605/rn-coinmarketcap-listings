/**
 * @format
 */

import React, { PureComponent, ReactElement } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Provider } from 'react-redux';

// Locals
import PlaceholderScreen from 'src/components/PlaceholderScreen';
import buildStore from 'src/redux';

export default class App extends PureComponent {
  private store = buildStore();

  public render(): ReactElement {
    return (
      <Provider store={this.store}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <PlaceholderScreen />
        </SafeAreaView>
      </Provider>
    );
  }
}
