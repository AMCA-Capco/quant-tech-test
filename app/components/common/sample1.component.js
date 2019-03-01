import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

/**
 * Component is described here
 */
class Sample1 extends React.PureComponent {
  render() {
    const { message } = this.props;

    return (
      <div>
        <button>{message}</button>
      </div>
    );
  }
}

Sample1.propTypes = {
  message: PropTypes.string
};

export default Sample1;
