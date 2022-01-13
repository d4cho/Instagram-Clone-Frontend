import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import UserInfoContainer from '../organisms/UserInfoContainer';
import UserPostsContainer from '../organisms/UserPostsContainer';

const UserPage = () => {
    const params = useParams();
    const { userName } = params;
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8081/users?userName=${userName}`)
            .then((res) => res.json())
            .then((userData) => {
                setUser(userData.users[0]);
                getPosts(userData.users[0].userId);
            });
    }, [userName]);

    const getPosts = (userId) => {
        fetch(`http://localhost:8082/posts/user/${userId}`)
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
                    <UserPostsContainer posts={posts} />
                </Grid>
            </Grid>
        </div>
    );
};

export default UserPage;
