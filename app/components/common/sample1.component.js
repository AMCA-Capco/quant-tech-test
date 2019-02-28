import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import './style.scss';

class Sample1 extends React.PureComponent {
  render() {
    const { message } = this.props;

    return (
      <div>
        <FormattedMessage id={message} />
      </div>
    );
  }
}

Sample1.propTypes = {
  message: PropTypes.string
};

export default Sample1;
