import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { useUserContext } from '../../context/UserContext';
import ProfileAvatar from '../atoms/ProfileAvatar';

const useStyles = makeStyles({
    name: {
        fontSize: '12px',
    },
    iconButton: {
        display: 'flex',
        flexDirection: 'column',
    },
});

const UsersList = () => {
    const { users, getAllUsers } = useUserContext();
    console.log(users);

    useEffect(() => {
        getAllUsers();
    }, []);

    return (
        <>
            {users.map((user) => (
                <ProfileAvatar key={user.userId} user={user} />
            ))}
        </>
    );
};

export default UsersList;
