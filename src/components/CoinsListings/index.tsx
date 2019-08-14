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
    this.requestListingsLatest();
  }

  private requestListingsLatest = async (): Promise<void> => {
    try {
      const data = await this.props.fetchListingsLatest(1);
      console.debug('requestListingsLatest success:', data);
    } catch (error) {
      console.warn('requestListingsLatest error:', error.response);
    }
  };

  public render(): ReactElement {
    return (
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.container}>
        <Text>{'CoinMarketCap - Listings'}</Text>
      </ScrollView>
    );
  }
}

export default withConnect(PlaceholderScreen);
