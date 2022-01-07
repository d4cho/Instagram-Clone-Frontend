import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import UsersList from '../molecules/UsersList';
import { useUserContext } from '../../context/UserContext';

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
    const { users, getAllUsers } = useUserContext();
    console.log(users);

    useEffect(() => {
        getAllUsers();
    }, []);

    return (
        <div className={classes.root}>
            <UsersList users={users} />
        </div>
    );
};

export default UsersListContainer;
