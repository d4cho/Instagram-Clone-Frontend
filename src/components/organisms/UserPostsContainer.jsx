import React from 'react';
import Grid from '@mui/material/Grid';
import MiniPost from '../molecules/MiniPost';

const UserPostsContainer = (props) => {
    const { posts, user } = props;

    return (
        <Grid container spacing={2}>
            {posts.length > 0 ? (
                posts.map((post) => (
                    <Grid key={post.postId} item xs={4}>
                        <MiniPost post={post} user={user} />
                    </Grid>
                ))
            ) : (
                <Grid item>No Posts</Grid>
            )}
        </Grid>
    );
};

export default UserPostsContainer;
