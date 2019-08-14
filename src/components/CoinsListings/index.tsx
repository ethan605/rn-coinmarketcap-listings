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
    currentPage: 0,
  };

  public componentDidMount(): void {
    this.handleRefresh();
  }

  private requestListingsLatest = async (refreshing = false): Promise<void> => {
    const currentPage = refreshing ? this.state.currentPage : 0;

    try {
      await this.props.fetchListingsLatest(currentPage + 1);
      this.setState({ currentPage: currentPage + 1 });
    } catch (error) {
      console.warn('requestListingsLatest error:', error.response);
    }
  };

  private handleLoadMore = (): Promise<void> => this.requestListingsLatest();
  private handleRefresh = (): Promise<void> => this.requestListingsLatest(true);

  private keyExtractor = (item: Coin): string => `coins_listings_${item.id}`;

  private renderLoading = (): ReactElement => (
    <View style={styles.initContainer}>
      <Text style={styles.initText}>{'Initializing data...'}</Text>
    </View>
  );

  private renderFooter = (): ReactElement | null => {
    if (!this.props.isFetching || this.state.currentPage < 1) {
      return null;
    }

    return (
      <View style={styles.loadingMoreContainer}>
        <Text style={styles.loadingMoreText}>{'Loading more...'}</Text>
      </View>
    );
  };

  public render(): ReactElement {
    const { allCoins, isFetching } = this.props;

    if (_.isEmpty(allCoins) && isFetching) {
      return this.renderLoading();
    }

    return (
      <FlatList
        ListFooterComponent={this.renderFooter}
        contentContainerStyle={styles.contentContainer}
        data={allCoins}
        keyExtractor={this.keyExtractor}
        onEndReached={this.handleLoadMore}
        onEndReachedThreshold={0.4}
        onRefresh={this.handleRefresh}
        refreshing={isFetching}
        renderItem={RecordRow}
        style={styles.container}
      />
    );
  }
}

export default withConnect(PlaceholderScreen);
