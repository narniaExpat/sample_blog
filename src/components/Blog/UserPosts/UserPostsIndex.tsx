import React, { useEffect, useState } from 'react';
import fetchUserPosts from 'fetch/fetchUserPosts';
import UserPostsList from './UserPostsList';
import Heading from 'molecules/Heading';
import { useTranslation } from 'react-i18next';

const UserPostsIndex = ({ signedIn }) => {
    const { t } = useTranslation();

    const [userPosts, setUserPosts] = useState([]);

    const deletePost = (e: React.MouseEvent<HTMLElement>) => {
        const { postId } = e.currentTarget.dataset;
        const remainingPosts = userPosts.filter((post) => post.id !== parseInt(postId));
        setUserPosts(remainingPosts);
    };

    useEffect(() => {
        const posts = fetchUserPosts();
        setUserPosts(posts);
    }, []);

    console.log(userPosts);
    console.log('Rendering UserPostsIndex component');

    return (
        <div className="my-1 p-2 box">
            <div className="m-1 py-1">
                <Heading variant="md" tag="h2">
                    Your Posts
                </Heading>
                <p className="m-1 p-1">{signedIn ? t('common:signedIn') : t('common:signedOut')}</p>
                {userPosts && (
                    <div className="px-1">
                        {<UserPostsList userPosts={userPosts} deletePost={deletePost} />}
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserPostsIndex;
