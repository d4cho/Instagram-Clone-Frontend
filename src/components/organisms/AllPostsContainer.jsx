import React, { useEffect, useState } from 'react';
import { usePostContext } from '../../context/PostContext';
import { useUserContext } from '../../context/UserContext';
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
    const { accessToken } = useUserContext();
    const classes = useStyles();
    const { allPosts, getAllPostsApi } = usePostContext();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (accessToken) {
            getAllPostsApi();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [accessToken]);

    useEffect(() => {
        if (allPosts.length > 0) {
            setIsLoading(false);
        }
    }, [allPosts]);

    if (isLoading === true) {
        return <div className={classes.root}>Loading Posts...</div>;
    }

    return allPosts.reverse().map((post) => (
        <div key={post.postId} className={classes.root}>
            <LandingPost post={post} />
        </div>
    ));
};

export default AllPostsContainer;
