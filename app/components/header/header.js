import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import './style.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header">
        <div className="nav-bar">
          <Link to="/">
            <Button>
              <Icon name="angle down" />
              Homepage
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
