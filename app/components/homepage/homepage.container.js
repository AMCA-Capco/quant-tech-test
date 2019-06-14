import { connect } from 'react-redux';
import { UPDATE_INVESTMENTS } from './actions';
import { getInvestments } from './selectors';
import Homepage from './homepage.component';

function mapStateToProps(state) {
  // Get properties from redux state here
  const investments = getInvestments(state);

  return { investments };
}

function mapDispatchToProps(dispatch) {
  return {
    updateInvestments: (investments) => {
      // Calls redux action
      dispatch({
        type: UPDATE_INVESTMENTS,
        payload: investments
      });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
