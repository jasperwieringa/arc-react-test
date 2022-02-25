import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import '@arc-web/components/dist/themes/index.css';
import '@arc-web/components/dist/themes/light.css';
import '@arc-web/components/dist/themes/dark.css';

ReactDOM.render(
  <App theme={'dark'} />,
  document.getElementById('root')
);