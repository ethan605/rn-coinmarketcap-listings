import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Action } from 'redux-actions';

// Redux
import { ReduxState } from 'src/redux';
import { listings } from 'src/redux/actions';
import { FetchListingsPayload } from 'src/redux/types';

interface StateMapping {
  allCoins: object[];
}

interface DispatchMapping {
  fetchListingsLatest: (page: number) => Action<FetchListingsPayload>;
}

function mapStateToProps(state: ReduxState): StateMapping {
  const { allCoins } = state.listings;
  return { allCoins };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchMapping {
  return {
    fetchListingsLatest: (page): Action<FetchListingsPayload> => dispatch(listings.fetchListingsLatest({ page })),
  };
}

export interface ConnectProps extends StateMapping, DispatchMapping {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
