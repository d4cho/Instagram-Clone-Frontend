import React, { useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { makeStyles } from '@mui/styles';
import { useUserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        border: '1px solid #dbdbdb',
        backgroundColor: 'white',
        padding: '5px 0',
        marginBottom: '20px',
    },
    name: {
        fontSize: '12px',
    },
    iconButton: {
        display: 'flex',
        flexDirection: 'column',
    },
});

const UsersList = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const { users, getAllUsers } = useUserContext();
    console.log(users);

    useEffect(() => {
        getAllUsers();
    }, []);

    return (
        <div className={classes.root}>
            {users.map((user, i) => (
                <IconButton
                    key={i}
                    className={classes.iconButton}
                    onClick={() => navigate(`/${user.userName}`)}
                >
                    <Avatar alt={user.userName} src={user.image} />
                    <span className={classes.name}>{user.userName}</span>
                </IconButton>
            ))}
        </div>
    );
};

export default UsersList;
