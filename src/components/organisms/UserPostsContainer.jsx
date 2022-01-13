import React from 'react';
import Grid from '@mui/material/Grid';
import MiniPost from '../molecules/MiniPost';

const UserPostsContainer = (props) => {
    const { posts } = props;

    return (
        <Grid container spacing={2}>
            {posts.length > 0 ? (
                posts.map((post) => (
                    <Grid key={post.postId} item xs={4}>
                        <MiniPost post={post} />
                    </Grid>
                ))
            ) : (
                <Grid item>No Posts</Grid>
            )}
        </Grid>
    );
};

export default UserPostsContainer;
