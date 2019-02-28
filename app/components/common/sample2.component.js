import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Sample2 = ({ message }) => <div>{message}</div>;

Sample2.propTypes = {
  message: PropTypes.string
};

export default Sample2;
