import React from 'react';
import Trend from './Trend';
import './Body.css';

class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bodyalignment">
        <Trend value={this.props.value} />
      </div>
    );
  }
}

export default Body;
