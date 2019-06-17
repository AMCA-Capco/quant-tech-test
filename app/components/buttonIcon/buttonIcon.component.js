import React from 'react';
import Popup from '../popup/popup.component';
import './style.scss';

class Console extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }


  render() {
    return (
      <div className="console-button-div">
        <button id="edit-button" onClick={this.togglePopup.bind(this)}></button>
        { this.state.showPopup
          ? (
            <Popup
              text="Cancel"
              closePopup={this.togglePopup}
            />
          )
          : null
        }
      </div>
    );
  }
}

export default Console;
