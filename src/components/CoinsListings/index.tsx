import React, { PureComponent, ReactElement } from 'react';
import { FlatList } from 'react-native';

// Models
import ListingRecord from 'src/models/ListingRecord';

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

  private keyExtractor = (item: ListingRecord): string => `coins_listings_${item.id}`;

  public render(): ReactElement {
    const { allCoins, isFetching } = this.props;

    return (
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={allCoins}
        keyExtractor={this.keyExtractor}
        onRefresh={this.requestListingsLatest}
        refreshing={isFetching}
        renderItem={RecordRow}
        style={styles.container}
      />
    );
  }
}

export default withConnect(PlaceholderScreen);
