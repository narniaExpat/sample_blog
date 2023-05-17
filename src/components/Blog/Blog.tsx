import React from 'react';
import { useTranslation } from 'react-i18next';
import Heading from 'molecules/Heading';
import LatestPosts from './LatestPosts';
import UserPostsIndex from './UserPosts';

const Blog = ({ signedIn }) => {
    const { t } = useTranslation();

    console.log('Rendering Blog component');

    return (
        <>
            <Heading tag="h1" variant="lg" className="m-1 p-1 text-center">
                {t('common:Blog')}
            </Heading>
            <div className="m-1 p-2 ">
                <LatestPosts />
                <UserPostsIndex signedIn={signedIn} />
            </div>
        </>
    );
};

export default Blog;
