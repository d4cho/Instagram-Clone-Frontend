import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import InputAdornment from '@mui/material/InputAdornment';

const useStyles = makeStyles({
    root: {
        padding: '5px 10px',
        display: 'flex',
        borderTop: '1px solid #dbdbdb',
        alignItems: 'center',
    },
    emptyText: {
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#0095f6',
        opacity: 0.3,
    },
    filledText: {
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#0095f6',
        opacity: 1,
    },
    textField: {
        fontSize: '14px',
    },
});

const CommentInput = (props) => {
    const { text, setText, handleSubmitComment } = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TextField
                id='standard-basic'
                variant='standard'
                placeholder='Add a comment...'
                sx={{ width: '100%' }}
                InputProps={{
                    disableUnderline: true,
                    startAdornment: (
                        <InputAdornment position='start'>
                            <InsertEmoticonIcon />
                        </InputAdornment>
                    ),
                    classes: {
                        input: classes.textField,
                    },
                }}
                onChange={(e) => setText(e.target.value)}
                value={text}
                onKeyDown={(e) => handleSubmitComment(e)}
            />
            <div
                className={text ? classes.filledText : classes.emptyText}
                onClick={(e) => handleSubmitComment(e)}
            >
                Post
            </div>
        </div>
    );
};

export default CommentInput;
