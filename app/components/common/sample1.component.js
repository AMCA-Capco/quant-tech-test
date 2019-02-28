import React from 'react';
import './style.scss';

class SampleComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Sample Component'
    };
  }

  render() {
    const { message } = this.state;

    return (
      <div>
        { message }
      </div>
    );
  }
}

export default SampleComponent;
