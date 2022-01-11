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
    viewAllComments: {
        fontSize: '14px',
        color: '#8e8e8e',
        cursor: 'pointer',
        padding: '5px 0',
    },
});

const Comments = (props) => {
    const classes = useStyles();
    const { userName, postDesc, fullComments, isFromLandingPost } = props;
    const numComments = fullComments.length + 1;
    const commentsToRender = isFromLandingPost ? fullComments.slice(-2) : fullComments;

    return (
        <div className={classes.root}>
            <div className={classes.comment}>
                <HoverUserName userName={userName} />
                <div style={{ paddingLeft: '5px' }}>{postDesc}</div>
            </div>
            {<div className={classes.viewAllComments}>{`View all ${numComments} comments`}</div>}
            {commentsToRender.map((comment) => (
                <div key={comment.commentId} className={classes.comment}>
                    <HoverUserName userName={comment.userName} />
                    <div style={{ paddingLeft: '5px' }}>{comment.commentText}</div>
                </div>
            ))}
        </div>
    );
};

export default Comments;
