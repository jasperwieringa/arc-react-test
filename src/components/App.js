import React from 'react';
import '@arc-web/components/dist/components/button/arc-button.js';
import '@arc-web/components/dist/components/icon-button/arc-icon-button.js';

function App(props) {
    const { theme } = props;

    return (
        <arc-icon-button name={'menu'}>Hello World</arc-icon-button>
    );
}

export default App;
