import React, { useState } from 'react';
import { Nav, Page } from './components';
import Blog from './components/Blog';

const App = () => {
    const [signedIn, setSignedIn] = useState(true);
    const signOut = () => setSignedIn(!signedIn);

    return (
        <Page signOutFn={signOut}>
            <Blog signedIn={signedIn} />
        </Page>
    );
};
export default App;
