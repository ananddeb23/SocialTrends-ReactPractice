import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Outerwrapper from './Outerwrapper';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Outerwrapper />, document.getElementById('root'));
registerServiceWorker();
