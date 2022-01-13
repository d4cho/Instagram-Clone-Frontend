import React, { useEffect, useState } from 'react';
import SearchedUser from '../molecules/SearchedUser';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';

const useStyles = makeStyles({
    root: {
        width: '351px',
        display: 'flex',
        flexDirection: 'column',
    },
    stats: {
        display: 'flex',
        flexDirection: 'column',
        borderTop: '1px solid #dbdbdb',
        borderBottom: '1px solid #dbdbdb',
        alignItems: 'center',
        padding: '10px 0',
        fontSize: '14px',
    },
    images: {
        display: 'flex',
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        padding: '10px 0',
    },
});

const UserSummaryContainer = (props) => {
    const { userId } = props;
    const classes = useStyles();
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8081/users/${userId}`)
            .then((res) => res.json())
            .then((userData) => {
                setUser(userData);
            });

        fetch(`http://localhost:8082/posts/user/${userId}`)
            .then((res) => res.json())
            .then((postsData) => {
                setPosts(postsData.posts);
            });
    }, [userId]);

    return (
        <div className={classes.root}>
            <SearchedUser user={user} />
            <div className={classes.stats}>
                <div>
                    <b>{posts.length}</b>
                </div>
                <div>posts</div>
            </div>
            <div className={classes.images}>
                <img src={'/images/img_girl.jpeg'} alt='girl in jacket' width='117px' />
                <img src={'/images/img_girl.jpeg'} alt='girl in jacket' width='117px' />
                <img src={'/images/img_girl.jpeg'} alt='girl in jacket' width='117px' />
            </div>
            <div className={classes.button}>
                <Button variant='outlined' size={'small'}>
                    Follow
                </Button>
            </div>
        </div>
    );
};

export default UserSummaryContainer;
