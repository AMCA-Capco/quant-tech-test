import React from 'react';
import PropTypes from 'prop-types';
import ButtonIcon from '../buttonIcon/buttonIcon.component';

import './style.scss';

class Console extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }


  render() {
    const { investments } = this.props;
    return (
      <div className="list-items">
        {
          investments.map((investment, i) => (
            <div className="investment-wrapper" key={`investment-${i + 0}`}>
                <ul className="columns" data-columns="2">
                  <li className="list-items"> Creation Date: {investment.creationDate} <ButtonIcon /> </li>
                  <li className="list-items"> Account number: {investment.accountNumber} <ButtonIcon /> </li>
                  <li className="list-items"> Charge Date: {investment.ChargeDate} <ButtonIcon /> </li>
                  <li className="list-items"> Status: {investment.status} <ButtonIcon /> </li>
                  <li className="list-items"> Investment amount: {investment.investmentAmount} <ButtonIcon /> </li>
                  <li className="list-items"> Accumulated investment amount: {investment.accumulatedInvestmentAmount} <ButtonIcon /> </li>
                  <li className="list-items"> Current market value: {investment.currentMarketValue} <ButtonIcon /> </li>
                </ul>
              </div>
          ))
        }
        {/* <div className="console-button-div">
          <button id="edit-button" onClick={this.togglePopup.bind(this)}></button>
          { this.state.showPopup
            ? (
              <Popup
                text="Cancel"
                closePopup={this.togglePopup}
              />
            )
            : null
          }
        </div> */}
      </div>
    );
  }
}

Console.propTypes = {
  investments: PropTypes.array,
  updateInvestment: PropTypes.func
};

export default Console;
