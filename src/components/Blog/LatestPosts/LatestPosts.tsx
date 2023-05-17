import React, { useEffect, useState } from 'react';
import fetchUpdatedPosts from 'fetch/fetchUpdatedPosts';
import allPosts from 'data/allPosts.json';
import sortPosts from 'utils/sortPosts';
import Box from 'molecules/Box';
import LatestPost from './LatestPost';
import { LatestPostsTop } from './LatestPosts.styles';
import Heading from 'molecules/Heading';
import Button from 'molecules/Button';
import { useTranslation } from 'react-i18next';
import Hr from 'molecules/Hr';

const LatestPosts = () => {
    const { t } = useTranslation();
    const [localTime, setLocalTime] = useState(new Date().toLocaleTimeString());
    const [updatedPosts, setUpdatedPosts] = useState(allPosts);

    const getLatestPosts = () => {
        const posts = fetchUpdatedPosts();
        setUpdatedPosts(posts);
    };

    const sortedPosts = sortPosts(updatedPosts);

    useEffect(() => {
        const id = setInterval(() => setLocalTime(new Date().toLocaleTimeString()), 1000);
        return () => clearInterval(id);
    }, []);

    console.log('Latest Posts component');

    return (
        <Box className="my-1 p-2 box">
            <LatestPostsTop>
                <Heading variant="md" tag="h3" className="my-1 p-1">
                    Latest posts
                </Heading>
                <div className="p-1">{localTime}</div>
            </LatestPostsTop>
            <div className="my-1">
                <Button variant="primary" onClick={getLatestPosts}>
                    {t('common:getLatestPosts')}
                </Button>
            </div>
            <Hr className="my-2" />
            <LatestPost post={sortedPosts[0]} />
        </Box>
    );
};

export default LatestPosts;
