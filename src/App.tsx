import React, { useState } from 'react';
import { Nav, Page } from './components';
import Blog from './components/Blog';

const App = () => {
    const [signedIn, setSignedIn] = useState(true);
    const signInToggle = () => setSignedIn(!signedIn);

    return (
        <Page signInToggle={signInToggle}>
            <Blog signedIn={signedIn} />
        </Page>
    );
};
export default App;
