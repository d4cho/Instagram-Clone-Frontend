import React from 'react';
import { makeStyles } from '@mui/styles';
import ProfileAvatar from '../atoms/ProfileAvatar';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        display: 'flex',
    },
    names: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    userName: {
        fontSize: '14px',
        color: '#262626',
        cursor: 'pointer',
        fontWeight: 'bold',
    },
    name: {
        fontSize: '14px',
        color: '#8E8E8E',
    },
});

const SearchedUser = (props) => {
    const { user } = props;
    const { userName, name } = user;
    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <div className={classes.root}>
            <ProfileAvatar user={user} isHideUserName={true} />
            <div className={classes.names}>
                <div className={classes.userName} onClick={() => navigate(`/${userName}`)}>
                    {userName}
                </div>
                <div className={classes.name}>{name}</div>
            </div>
        </div>
    );
};

export default SearchedUser;
