import React from 'react';
import { Grid } from 'semantic-ui-react'
import { Sample1, Sample2 } from 'components/common';
import './style.scss';

class HomePage extends React.Component {

  componentDidMount() {
    this.props.sampleDispatch('Sample redux data');
  }

  render() {
    return (
      <div>
          <Grid divided="vertically" celled>
            <Grid.Row columns={1}>
              <Grid.Column>
                <h1>Homepage: {this.props.value}</h1>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
              <Grid.Column>
                <Sample1 />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
              <Grid.Column>
                <Sample2 />
              </Grid.Column>
            </Grid.Row>
          </Grid>        
      </div>
    );
  }
}

export default HomePage;
