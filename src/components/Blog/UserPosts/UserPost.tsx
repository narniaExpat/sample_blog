import Heading from 'molecules/Heading';
import React from 'react';

const UserPost = ({ post }) => {
    console.log('Rendering UserPost component');

    const navigateToPost = (e: React.MouseEvent<HTMLDivElement>) => {
        const { postId } = e.currentTarget.dataset;
        console.log(postId);
    };

    return (
        <div className="my-1 flex-row-left " data-post-id={post.id} onClick={navigateToPost}>
            <Heading tag="h4" id={post.title} className="px-2 font-sm font-bold as-link">
                {post.title}
            </Heading>
        </div>
    );
};

export default UserPost;
