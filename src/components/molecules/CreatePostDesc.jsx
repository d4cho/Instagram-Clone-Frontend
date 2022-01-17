import React from 'react';
import { makeStyles } from '@mui/styles';
import { useUserContext } from '../../context/UserContext';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import { useApplicationContext } from '../../context/ApplicationContext';

const useStyles = makeStyles({
    container: {
        width: 1011 - 671,
    },
    top: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
    },
    userName: {
        fontSize: '14px',
        paddingLeft: '10px',
        fontWeight: 'bold',
    },
    textField: {
        width: '100%',
    },
    count: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '10px',
        fontSize: '12px',
        color: '#c7c7c7',
    },
});

const CreatePostDesc = (props) => {
    const { postDesc, setPostDesc } = useApplicationContext();
    const { loggedInUser } = useUserContext();
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.top}>
                <Avatar alt={loggedInUser.userName} src={loggedInUser.image} />
                <div className={classes.userName}>{loggedInUser.userName}</div>
            </div>
            <TextField
                className={classes.textField}
                variant='standard'
                id='outlined-multiline-static'
                multiline
                rows={10}
                placeholder='Write a caption...'
                inputProps={{ style: { paddingLeft: '10px' } }}
                value={postDesc}
                onChange={(e) => setPostDesc(e.target.value)}
            />
            <div className={classes.count}>{`${postDesc.length}/2,200`}</div>
        </div>
    );
};

export default CreatePostDesc;
