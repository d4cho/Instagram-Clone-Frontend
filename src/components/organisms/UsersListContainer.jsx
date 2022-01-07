import React from 'react';
import { makeStyles } from '@mui/styles';
import UsersList from '../molecules/UsersList';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        border: '1px solid #dbdbdb',
        backgroundColor: 'white',
        padding: '5px 0',
        marginBottom: '20px',
    },
});

const UsersListContainer = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <UsersList />
        </div>
    );
};

export default UsersListContainer;
