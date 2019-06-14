import { fromJS } from 'immutable';
import { UPDATE_INVESTMENTS } from './actions';

// Initial routing state
const initialState = fromJS({
  investments: [
    {
      creationDate: '2019-01-18',
      accountNumber: '001077019304',
      ChargeDate: '1 of the month',
      nextPaymentDate: '2018-11-01',
      status: 'Monthly charge',
      investmentAmount: 50000,
      accumulatedInvestmentAmount: 50000,
      currentMarketValue: 50011
    }
  ],
});

function homepage(state = initialState, action) {
  switch (action.type) {
    case UPDATE_INVESTMENTS: {
      return state.merge({ investments: action.payload });
    }
    default: {
      return state;
    }
  }
}

export default homepage;
