import React from 'react';
import logo from './icon.svg';
import extra from './extra.png';

class Trendstatus extends React.Component {
  constructor() {
    super();
  }

  render() {
    let val = <img src={extra} alt="extra" />;
    if (this.props.value === 'true') {
      val = <img src={logo} alt="trend" />;
    }

    return (
      <div >
        <h4>{val}</h4>
      </div>
    );
  }
}

export default Trendstatus;
