import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    userName: {
        cursor: 'pointer',
        '&:hover': {
            textDecoration: 'underline',
        },
        fontSize: '14px',
        color: '#262626',
    },
});

const HoverUserName = (props) => {
    const classes = useStyles();
    const { userName } = props;

    return <div className={classes.userName}>{userName}</div>;
};

export default HoverUserName;
