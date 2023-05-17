import React, { useEffect, useState } from 'react';
import Post from './Post';

type Props = {
    post: any;
};

const LatestPost = ({ post }: Props) => {
    const [likesCount, setLikesCount] = useState(null);

    useEffect(() => {
        const id = setInterval(() => {
            setLikesCount((likesCount) => likesCount + 1);
        }, 3000);

        return () => clearInterval(id);
    }, []);

    useEffect(() => {
        setLikesCount(null);
    }, [post]);

    console.log('Rendering LatestPost component');

    return (
        <div className="my-2 mx-2 p-2 border border-rounded">
            {post ? (
                <>
                    <Post post={post} />
                    {!!likesCount && (
                        <div className="my-1 p-1">
                            <span>{likesCount}</span>&nbsp;<span>Likes</span>
                        </div>
                    )}
                </>
            ) : (
                <p>Click on Get Latest Post button</p>
            )}
        </div>
    );
};

export default LatestPost;
