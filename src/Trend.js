import React from 'react';
import Trendname from './Trendname';
import TrendStatus from './Trendstatus';
import './Trend.css';

class Trend extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const name = [];
    const status = [];
    for (let i = 0; i < this.props.value.length; i += 1) {
      name.push(<Trendname value={this.props.value[i].title} />);
      status.push(<TrendStatus value={this.props.value[i].status} />);
    }
    // alert(status);
    return (
      <div className="backvalue">
        <div className="trendalignleft">{name}</div>
        <pre />
        <pre />
        <div className="trendalignright">{status}</div>

      </div>
    );
  }
}

export default Trend;

