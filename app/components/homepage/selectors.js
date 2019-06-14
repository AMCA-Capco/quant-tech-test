import { createSelector } from 'reselect';

const getState = (state) => state;

const getInvestments = createSelector(
  getState,
  (state) => state.get('homepage').get('investments')
);

export { getInvestments };
