import React from 'react';
import Body from './Body';
import Header from './Header';
import './InnerWrapper.css';

class InnerWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="blueback">
        <Header />
        <Body value={this.props.value} />
      </div>
    );
  }
}

export default InnerWrapper;

