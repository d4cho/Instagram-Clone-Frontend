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
    const { users, getAllUsersApi } = useUserContext();

    useEffect(() => {
        getAllUsersApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={classes.root}>
            <UsersList users={users} />
        </div>
    );
};

export default UsersListContainer;
