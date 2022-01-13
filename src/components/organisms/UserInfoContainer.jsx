import React from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const useStyles = makeStyles({
    root: {
        fontSize: '14px',
    },
    userName: {
        fontSize: '28px',
        fontWeight: 300,
        color: '#262626',
    },
});

const UserInfoContainer = (props) => {
    const { user, posts } = props;
    const classes = useStyles();

    return (
        <Grid container spacing={2} className={classes.root}>
            <Grid container item spacing={2} alignItems={'center'}>
                <Grid item className={classes.userName}>
                    {user.userName}
                </Grid>
                <Grid item>
                    <Button variant='outlined' size={'small'}>
                        Follow
                    </Button>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <b>{posts.length}</b> posts
            </Grid>
            <Grid item xs={12}>
                <b>{user.name}</b>
            </Grid>
        </Grid>
    );
};

export default UserInfoContainer;
