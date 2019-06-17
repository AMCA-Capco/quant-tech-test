import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import './style.scss';

class Popup extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      // value: props.investment[props.key],
      // investment: props.investment
    };
  }

  handleSubmit() {
    const { updateInvestment, key } = this.props;
    const { investment, value } = this.state;

    investment[key] = value;

    updateInvestment([investment]);

    this.handleClose();
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { value } = this.state;

    return (
      <div className="popup">
        <div className="popup_inner">
          <h1 className="popup-header">Change account number:</h1>
          <hr />
          <h3 className="popup-header2">Please select your debit account number:</h3>
          <input type="text" value={value} onChange={this.handleChange}></input>
          <div className="popup-button-div">
            <button className="popup-button" type="submit" onClick={this.props.closePopup}>
              <FormattedMessage id="popup.cancel" />
            </button>
            <button className="popup-button" type="submit" onClick={this.handleSubmit}>
              <FormattedMessage id="popup.determine" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Popup.propTypes = {
  key: PropTypes.string,
  investments: PropTypes.object,
  updateInvestment: PropTypes.func
};

export default Popup;
