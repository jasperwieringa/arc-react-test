import React from 'react';
import '@arc-web/components/dist/components/container/arc-container.js';
import '@arc-web/components/dist/components/navbar/arc-navbar.js';
import '@arc-web/components/dist/components/sidebar/arc-sidebar.js';
import '@arc-web/components/dist/components/button/arc-button.js';
import '@arc-web/components/dist/components/icon-button/arc-icon-button.js';

function App(props) {
    const { theme } = props;

    return (
        <arc-container theme={theme}>
            <arc-navbar slot={'nav'}>
                <arc-icon-button name={'home'}><></></arc-icon-button>
            </arc-navbar>
            <arc-sidebar slot={'side'} title={'Make a selection'}>
                <div style={{padding: 'var(--arc-spacing-medium'}}>Some sidebar content</div>
            </arc-sidebar>
            <section aria-label={'Demo section'} style={{padding: 'var(--arc-spacing-medium'}}>
                Some content
            </section>
        </arc-container>
    );
}

export default App;
