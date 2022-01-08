import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles({
    root: {
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'space-between',
        padding: '6px 16px 8px',
    },
    icons: {
        cursor: 'pointer',
        '&:hover': {
            color: '#bdbdbd',
        },
    },
    liked: {
        cursor: 'pointer',
        color: 'red',
    },
});

const LikeCommentMessage = () => {
    const classes = useStyles();
    const [isLiked, setIsLiked] = useState(false);

    const toggleIsLiked = () => {
        setIsLiked(!isLiked);
    };

    return (
        <div className={classes.root}>
            <Grid container justifyContent={'space-between'}>
                <Grid container item xs={9} spacing={2}>
                    <Grid item>
                        {isLiked ? (
                            <FavoriteIcon className={classes.liked} onClick={toggleIsLiked} />
                        ) : (
                            <FavoriteBorderIcon className={classes.icons} onClick={toggleIsLiked} />
                        )}
                    </Grid>
                    <Grid item>
                        <ModeCommentOutlinedIcon className={classes.icons} />
                    </Grid>
                    <Grid item>
                        <SendOutlinedIcon className={classes.icons} />
                    </Grid>
                </Grid>
                <Grid item xs={'auto'}>
                    <BookmarkBorderOutlinedIcon className={classes.icons} />
                </Grid>
            </Grid>
        </div>
    );
};

export default LikeCommentMessage;
