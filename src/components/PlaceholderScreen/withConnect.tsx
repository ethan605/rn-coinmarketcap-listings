import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Action } from 'redux-actions';

// Redux
import { ReduxState } from 'src/redux';
import { listings } from 'src/redux/actions';

interface IStateMapping {
  allCoins: object[];
};

interface IDispatchMapping {
  fetchListingsLatest: (page: number) => Action<{ page: number }>;
};

function mapStateToProps(state: ReduxState): IStateMapping {
  const { allCoins } = state.listings;
  return { allCoins };
}

function mapDispatchToProps(dispatch: Dispatch): IDispatchMapping {
  return {
    fetchListingsLatest: page => dispatch(listings.fetchListingsLatest({ page })),
  };
}

export interface IConnectProps extends IStateMapping, IDispatchMapping {
};

export default connect(mapStateToProps, mapDispatchToProps);
