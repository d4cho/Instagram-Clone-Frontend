import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid red',
        marginTop: 500,
    },
});

const LoginPage = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>Login Page</div>
        </div>
    );
};

export default LoginPage;
