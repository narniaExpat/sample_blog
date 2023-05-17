import React, { PropsWithChildren } from 'react';
import GlobalStyle from './GlobalStyle';
import Container from './Layout/Container';
import Nav from './Nav';

type Props = {
    signOutFn: () => void;
};

const Page = ({ children, signOutFn }: PropsWithChildren<Props>) => (
    <>
        <GlobalStyle />
        <main>
            <Nav signOutFn={signOutFn} />
            <Container>{children}</Container>
        </main>
    </>
);

export default Page;
