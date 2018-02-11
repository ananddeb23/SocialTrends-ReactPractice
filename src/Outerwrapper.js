import React from 'react';
import InnerWrapper from './InnerWrapper';
import './Outerwrapper.css';
import data from './data.json';

class Outerwrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (

      <div className="back-grey">
        <InnerWrapper value={data} />
      </div>
    );
  }
}

export default Outerwrapper;
