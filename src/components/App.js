import '@arc-web/components/dist/components/container/arc-container.js';
import '@arc-web/components/dist/components/navbar/arc-navbar.js';
import '@arc-web/components/dist/components/sidebar/arc-sidebar.js';
import '@arc-web/components/dist/components/button/arc-button.js';

function App(props) {
    const { theme } = props;

    return (
        <arc-container id={'container'} theme={theme}>
            <arc-navbar slot={'nav'} logo={'/assets/arc-red.svg'}>
                <arc-button type={'tab'}>Tab One</arc-button>
            </arc-navbar>
            <arc-sidebar slot={'side'}>
                <div style={{padding: 'var(--arc-spacing-small)'}}>Some sidebar content</div>
            </arc-sidebar>
            <div style={{padding: 'var(--arc-spacing-small)'}}>
                Some default content
            </div>
        </arc-container>
    );
}

export default App;
