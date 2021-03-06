import React from 'react';
import { makeStyles } from '@mui/styles';
import ProfileAvatar from '../atoms/ProfileAvatar';
import { useUserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';

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
    },
    name: {
        fontSize: '14px',
        color: '#8E8E8E',
    },
});

const LoggedInUser = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const { loggedInUser } = useUserContext();

    return (
        <div className={classes.root}>
            {loggedInUser ? (
                <>
                    <ProfileAvatar user={loggedInUser} isHideUserName={true} />
                    <div className={classes.names}>
                        <div
                            className={classes.userName}
                            onClick={() => navigate(`/${loggedInUser.userName}`)}
                        >
                            {loggedInUser.userName}
                        </div>
                        <div className={classes.name}>{loggedInUser.name}</div>
                    </div>
                </>
            ) : (
                <>
                    <Skeleton variant='circular' width={40} height={40} />
                    <div className={classes.names}>
                        <Skeleton variant='rectangular' width={100} height={20} />
                        <Skeleton variant='rectangular' width={80} height={20} />
                    </div>
                </>
            )}
        </div>
    );
};

export default LoggedInUser;
