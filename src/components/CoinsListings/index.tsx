import _ from 'lodash';
import React, { PureComponent, ReactElement } from 'react';
import { FlatList, Text, View } from 'react-native';

// Models
import Coin from 'src/models/Coin';

// Locals
import RecordRow from './RecordRow';
import styles from './styles';
import withConnect, { ConnectProps } from './withConnect';

type Props = ConnectProps;

interface State {
  currentPage: number;
}

class PlaceholderScreen extends PureComponent<Props, State> {
  state = {
    currentPage: 1,
  };

  public componentDidMount(): void {
    this.requestListingsLatest();
  }

  private requestListingsLatest = async (): Promise<void> => {
    try {
      this.setState({ currentPage: 1 });
      await this.props.fetchListingsLatest(1);
    } catch (error) {
      console.warn('requestListingsLatest error:', error.response);
    }
  };

  private handleLoadMore = async (): Promise<void> => {
    const { currentPage } = this.state;
    try {
      await this.props.fetchListingsLatest(currentPage + 1);
      this.setState({ currentPage: currentPage + 1 });
    } catch (error) {
      console.warn('requestListingsLatest error:', error.response);
    }
  };

  private keyExtractor = (item: Coin): string => `coins_listings_${item.id}`;

  private renderLoading = (): ReactElement => (
    <View style={styles.loadingContainer}>
      <Text style={styles.loading}>{'Initializing data...'}</Text>
    </View>
  );

  public render(): ReactElement {
    const { allCoins, isFetching } = this.props;

    if (_.isEmpty(allCoins) && isFetching) {
      return this.renderLoading();
    }

    return (
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={allCoins}
        keyExtractor={this.keyExtractor}
        onEndReached={this.handleLoadMore}
        onEndReachedThreshold={0.4}
        onRefresh={this.requestListingsLatest}
        refreshing={isFetching}
        renderItem={RecordRow}
        style={styles.container}
      />
    );
  }
}

export default withConnect(PlaceholderScreen);
