import { Dispatch } from 'redux';
import { connect } from 'react-redux';

// Models
import Coin from 'src/models/Coin';

// Redux
import { ReduxState } from 'src/redux';
import { listings } from 'src/redux/actions';

interface StateMapping {
  allCoins: Coin[];
  isFetching: boolean;
}

interface DispatchMapping {
  fetchListingsLatest: (page: number) => Promise<object[]>;
}

function mapStateToProps(state: ReduxState): StateMapping {
  const { allCoins, isFetching } = state.listings;
  return { allCoins, isFetching };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchMapping {
  return {
    fetchListingsLatest: (page): Promise<object[]> =>
      new Promise<object[]>(
        (resolve, reject): void => {
          dispatch(listings.fetchListingsLatest({ page, promise: { resolve, reject } }));
        }
      ),
  };
}

export interface ConnectProps extends StateMapping, DispatchMapping {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
