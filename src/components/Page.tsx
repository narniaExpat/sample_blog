import React, { PropsWithChildren } from 'react';
import GlobalStyle from './GlobalStyle';
import Container from './Layout/Container';
import Nav from './Nav';

type Props = {
    signInToggle: () => void;
};

const Page = ({ children, signInToggle }: PropsWithChildren<Props>) => (
    <>
        <GlobalStyle />
        <main>
            <Nav signInToggle={signInToggle} />
            <Container>{children}</Container>
        </main>
    </>
);

export default Page;
