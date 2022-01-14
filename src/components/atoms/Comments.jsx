import React from 'react';
import { makeStyles } from '@mui/styles';
import HoverUserName from './HoverUserName';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();
    const classes = useStyles();
    const { userName, postDesc, fullComments, isFromLandingPost, userId, postId } = props;
    const numComments = fullComments.length + 1;
    const commentsToRender = isFromLandingPost ? fullComments.slice(-2) : fullComments;

    return (
        <div className={classes.root}>
            <div className={classes.comment}>
                <HoverUserName userName={userName} userId={userId} />
                <div style={{ paddingLeft: '5px' }}>{postDesc}</div>
            </div>
            {
                <div
                    className={classes.viewAllComments}
                    onClick={() => navigate(`/p/${postId}`)}
                >{`View all ${numComments} comments`}</div>
            }
            {commentsToRender.map((comment) => (
                <div key={comment.commentId} className={classes.comment}>
                    <HoverUserName userName={comment.userName} userId={comment.userId} />
                    <div style={{ paddingLeft: '5px' }}>{comment.commentText}</div>
                </div>
            ))}
        </div>
    );
};

export default Comments;
