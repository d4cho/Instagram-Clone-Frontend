import React, { useEffect } from 'react';
import { usePostContext } from '../../context/PostContext';
import LandingPost from '../molecules/LandingPost';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        border: '1px solid #dbdbdb',
        backgroundColor: 'white',
        padding: '5px 0',
        marginBottom: '20px',
    },
});

const AllPostsContainer = () => {
    const classes = useStyles();
    const { allPosts, getAllPosts } = usePostContext();

    useEffect(() => {
        getAllPosts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log('all posts', allPosts);

    return allPosts.map((post) => (
        <div key={post.postId} className={classes.root}>
            <LandingPost post={post} />
        </div>
    ));
};

export default AllPostsContainer;