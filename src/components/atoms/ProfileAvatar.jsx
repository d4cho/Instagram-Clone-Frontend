import React from 'react';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
    name: {
        fontSize: '12px',
    },
    iconButton: {
        display: 'flex',
        flexDirection: 'column',
    },
});

const ProfileAvatar = (props) => {
    const { user } = props;
    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <IconButton className={classes.iconButton} onClick={() => navigate(`/${user.userName}`)}>
            <Avatar alt={user.userName} src={user.image} />
            <span className={classes.name}>{user.userName}</span>
        </IconButton>
    );
};

export default ProfileAvatar;
