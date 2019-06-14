import React from 'react';
import PropTypes from 'prop-types';
import Popup from '../popup/popup.component';
import './style.scss';

class Console extends React.Component { // eslint-disable-line react/prefer-stateless-function
    state = {
      showPopup: false
    };

    togglePopup() {
      this.setState({
        showPopup: !this.state.showPopup
      });
    }


    render() {
      const { investments } = this.props;
      return (
        <div className="console">
          
            <div className="item-wrapper">
              {
                investments.map((investment, i) => (
                  <div className="investment-wrapper" key={`investment-${i + 0}`}>
                    Account Number {investment.accountNumber}
                  </div>
                ))
              }
            </div>
            <div>
              <button type="button" onClick={this.togglePopup.bind(this)}>show popup</button>
              {
                this.state.showPopup 
                ? (
                    <Popup 
                        closePopup={this.togglePopup.bind(this)} 
                    />
                ) 
                : null
              }
            </div>
          </div>
      );
    }
}

Console.propTypes = {
  investments: PropTypes.array,
  updateInvestment: PropTypes.func
};

export default Console;
