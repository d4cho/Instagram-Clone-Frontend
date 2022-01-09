import React from 'react';
import { makeStyles } from '@mui/styles';
import HoverUserName from './HoverUserName';

const useStyles = makeStyles({
    root: {
        padding: '10px 0',
        margin: '0 20px',
    },
    comment: {
        display: 'flex',
        fontSize: '14px',
    },
});

const Comments = (props) => {
    const classes = useStyles();
    const { userName, postDesc, fullComments } = props;

    return (
        <div className={classes.root}>
            <div className={classes.comment}>
                <HoverUserName userName={userName} />
                <div style={{ paddingLeft: '5px' }}>{postDesc}</div>
            </div>
            {fullComments.map((comment) => (
                <div key={comment.commentId} className={classes.comment}>
                    <HoverUserName userName={comment.userName} />
                    <div style={{ paddingLeft: '5px' }}>{comment.commentText}</div>
                </div>
            ))}
        </div>
    );
};

export default Comments;
