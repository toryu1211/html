import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRoute from './AppRoute';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AppRoute />, document.getElementById('root'));

serviceWorker.unregister();
