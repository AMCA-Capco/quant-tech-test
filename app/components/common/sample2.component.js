import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

/**
 * Component is described here
 */
const Sample2 = ({ message }) => (
  <div>
    <button>{message}</button>
  </div>
);

Sample2.propTypes = {
  message: PropTypes.string
};

export default Sample2;
