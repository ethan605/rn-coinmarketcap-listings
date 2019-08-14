/**
 * @format
 */

import React, { PureComponent, ReactElement } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

// Locals
import withConnect, { ConnectProps } from './withConnect';

type Props = ConnectProps;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
  },
});

class PlaceholderScreen extends PureComponent<Props> {
  public componentDidMount(): void {
    this.props.fetchListingsLatest(0);
  }

  public render(): ReactElement {
    return (
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.container}>
        <Text>{'CoinsMarketCap - Listings'}</Text>
      </ScrollView>
    );
  }
}

export default withConnect(PlaceholderScreen);
