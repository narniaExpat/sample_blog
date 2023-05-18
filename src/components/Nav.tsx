import React, { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import Button from 'molecules/Button';
import Navbar from 'molecules/NavBar';

type Props = {
    signInToggle: () => void;
};

const Nav = ({ signInToggle }: Props) => {
    const { t } = useTranslation();
    return (
        <Navbar>
            <Button variant="danger" onClick={signInToggle}>
                {t('common:signOut')}
            </Button>
        </Navbar>
    );
};

export default Nav;
