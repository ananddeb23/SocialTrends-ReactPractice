import React from 'react';

class Trendname extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
        <h4>#{this.props.value}</h4>
      </div>
    );
  }
}

export default Trendname;
