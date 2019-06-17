import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Container, Image } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';
import Logo from './images/logo.png';
import './style.scss';

class Header extends React.Component { 
  render() {
    return (
      <div className="header">
        <Menu borderless secondary pointing size="small">
          <Container>
            <Menu.Item>
              <Link to="/">
                <FormattedMessage id="header.home" />
              </Link>
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
                <Link to="/">
                  <FormattedMessage id="header.profile" />
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/">
                  <FormattedMessage id="header.logout" />
                </Link>
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
      </div>
    );
  }
}

export default Header;
