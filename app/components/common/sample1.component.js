import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import './style.scss';

/**
 * Component is described here
 */
class Sample1 extends React.PureComponent {
  render() {
    const { message } = this.props;

    return (
      <div>
        <Button primary>{message}</Button>
      </div>
    );
  }
}

Sample1.propTypes = {
  message: PropTypes.string
};

export default Sample1;
