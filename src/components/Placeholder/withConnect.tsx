import { Dispatch } from 'redux';
import { connect } from 'react-redux';

// Redux
import { ReduxState } from 'src/redux';
import { coins } from 'src/redux/actions';

function mapStateToProps(state: ReduxState) {
  const { allCoins } = state.coins;
  return { allCoins };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    fetchAllCoins: (page: number) => dispatch(coins.fetchAllCoins(page)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps);
