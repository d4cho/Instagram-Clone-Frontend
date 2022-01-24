import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import UserInfoContainer from '../organisms/UserInfoContainer';
import UserPostsContainer from '../organisms/UserPostsContainer';
import PostModalPage from './PostModalPage';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { useUserContext } from '../../context/UserContext';
import { usePostContext } from '../../context/PostContext';

const UserPage = (props) => {
    const { openModal } = props;
    const params = useParams();
    const { userName } = params;
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);
    const { getUserByUserNameApi } = useUserContext();
    const { getPostByUserIdApi } = usePostContext();

    useEffect(() => {
        getUserByUserNameApi(userName)
            .then((res) => res.json())
            .then((userData) => {
                setUser(userData.users[0]);
                getPosts(userData.users[0].userId);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userName]);

    const getPosts = (userId) => {
        getPostByUserIdApi(userId)
            .then((res) => res.json())
            .then((postsData) => {
                setPosts(postsData.posts);
            });
    };

    return (
        <div
            style={{
                paddingTop: '20px',
                margin: '60px 15vw 0 15vw',
            }}
        >
            {openModal ? <PostModalPage openModal={openModal} /> : null}
            <Grid container spacing={2}>
                <Grid item xs={12} md={2}>
                    <Avatar
                        alt={user.userName}
                        src={user.image}
                        style={{
                            width: '100px',
                            height: '100px',
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={'auto'}>
                    <UserInfoContainer user={user} posts={posts} />
                </Grid>
                <Grid item xs={12}>
                    <div style={{ borderTop: '1px solid #dbdbdb' }} />
                </Grid>
                <Grid item xs={12}>
                    <UserPostsContainer posts={posts} user={user} />
                </Grid>
            </Grid>
        </div>
    );
};

export default withAuthenticationRequired(UserPage, {
    onRedirecting: () => <div>Loding...</div>,
});
