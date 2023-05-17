import Heading from 'molecules/Heading';
import React from 'react';

const Post = ({ post }) => {
    console.log('Rendering Post component');

    return (
        <div className="">
            {post && (
                <div className="post p-1">
                    <Heading variant="sm" tag="h1" className="py-1">
                        {post.title}
                    </Heading>
                    <p>{post.body}</p>
                </div>
            )}
        </div>
    );
};

export default Post;
