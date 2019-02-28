import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import './style.scss';

const Sample2 = ({ message }) => <div><FormattedMessage id={message} /></div>;

Sample2.propTypes = {
  message: PropTypes.string
};

export default Sample2;
