import React from 'react';
import { Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import './style.scss';
import Console from '../console';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      investments: []
    };
  }

  componentDidMount() {
    const { investments } = this.props;

    if (investments) {
      const investmentList = investments.toJS();

      this.setState({
        investments: investmentList
      });
    }
  }

  render() {
    const { investments } = this.state;
    const { updateInvestment } = this.props;

    return (
      <div className="homepage">
        <Container>
          <div className="main-body">
            <h1 className="main-title">
              <FormattedMessage id="homepage.header" />
            </h1>
            <div className="console">
              <div className="console-header">
                <FormattedMessage id="homepage.manage" />
              </div>
              <div className="console-container">
                <Console investments={investments} updateInvestment={updateInvestment} />
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

HomePage.propTypes = {
  investments: PropTypes.object,
  updateInvestment: PropTypes.func
};

export default HomePage;
