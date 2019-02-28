import React from 'react';
import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Sample1, Sample2 } from 'components/common';
import './style.scss';

class HomePage extends React.Component {
  componentDidMount() {
    const { sampleDispatch } = this.props;
    sampleDispatch('Sample redux data');
  }

  render() {
    const { value } = this.props;

    return (
      <div>
        <Grid divided="vertically" celled>
          <Grid.Row columns={1}>
            <Grid.Column>
              <h1>Homepage: {value}</h1>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column>
              <Sample1 />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column>
              <Sample2 message="Sample functional component" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

HomePage.propTypes = {
  sampleDispatch: PropTypes.func,
  value: PropTypes.string
};

export default HomePage;
