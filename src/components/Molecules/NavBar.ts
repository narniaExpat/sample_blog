import styled, { CSSObject } from 'styled-components';

const Navbar = styled.nav(
    () =>
        ({
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-end',
            alignItems: 'center',
            width: '100%',
            height: '3rem',
            backgroundColor: '#ccc7c7'
        } as CSSObject)
);

export default Navbar;
