import React, { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import Button from 'molecules/Button';
import Navbar from 'molecules/NavBar';

type Props = {
    signOutFn: () => void;
};

const Nav = ({ signOutFn }: Props) => {
    const { t } = useTranslation();
    return (
        <Navbar>
            <Button variant="danger" onClick={signOutFn}>
                {t('common:signOut')}
            </Button>
        </Navbar>
    );
};

export default Nav;
