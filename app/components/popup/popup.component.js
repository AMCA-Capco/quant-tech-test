import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class Popup extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      value: props.investment[props.key],
      investment: props.investment
    };
  }

  handleSubmit() {
    const { updateInvestment, key } = this.props;
    const { investment, value } = this.state;

    investment[key] = value;

    updateInvestment([investment]);

    this.handleClose();
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { value } = this.state;

    return (
      <div className="popup">
        <div className="popup_inner">
          <h1>{this.props.title}</h1>
          <form>
                  <input type="text" value={value} onChange={this.handleChange}></input>
            <input type="submit" value="submit" />
            <button onClick={this.handleClose}>Close</button>
            <button onClick={this.handleSubmit}>Determine</button>
          </form>
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
