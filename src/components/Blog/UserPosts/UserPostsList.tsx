import Button from 'molecules/Button';
import React from 'react';
import UserPost from './UserPost';

type Props = {
    userPosts: Array<any>;
    deletePost: (e: React.MouseEvent) => void;
};

const UserPostsList = ({ userPosts, deletePost }: Props) => {
    console.log('Rendering UserPostsList component');

    return (
        <div className="px-1">
            {userPosts.map((post, index) => (
                <div key={index} className="my-1 box flex-row">
                    <UserPost post={post} />
                    <Button variant="danger" data-post-id={post.id} onClick={deletePost}>
                        Delete
                    </Button>
                </div>
            ))}
        </div>
    );
};

export default UserPostsList;
