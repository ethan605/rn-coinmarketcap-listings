/**
 * @format
 */

import React, { PureComponent, ReactElement } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import 'reflect-metadata';

// Locals
import CoinsListings from 'src/components/CoinsListings';
import buildStore from 'src/redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class App extends PureComponent {
  private store = buildStore();

  public render(): ReactElement {
    return (
      <Provider store={this.store}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <CoinsListings />
        </SafeAreaView>
      </Provider>
    );
  }
}
