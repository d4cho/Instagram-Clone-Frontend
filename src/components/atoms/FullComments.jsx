import React from 'react';
import { makeStyles } from '@mui/styles';
import HoverUserName from './HoverUserName';
import { useNavigate } from 'react-router-dom';
import ProfileAvatar from './ProfileAvatar';

const useStyles = makeStyles({
    root: {},
    comment: {
        display: 'flex',
        fontSize: '14px',
        alignItems: 'center',
    },
    viewAllComments: {
        fontSize: '14px',
        color: '#8e8e8e',
        cursor: 'pointer',
    },
});

const FullComments = (props) => {
    const navigate = useNavigate();
    const classes = useStyles();
    const { userName, postDesc, fullComments, userId, image } = props;
    const postUser = {
        userName,
        image,
    };
    console.log(fullComments);

    return (
        <div className={classes.root}>
            <div className={classes.comment}>
                <ProfileAvatar user={postUser} isHideUserName />
                <HoverUserName userName={userName} userId={userId} />
                <div style={{ paddingLeft: '5px' }}>{postDesc}</div>
            </div>

            {fullComments &&
                fullComments.map((comment) => {
                    const user = { userName: comment.userName, image: comment.profileImage };

                    return (
                        <div key={comment.commentId} className={classes.comment}>
                            <ProfileAvatar user={user} isHideUserName />
                            <HoverUserName userName={comment.userName} userId={comment.userId} />
                            <div style={{ paddingLeft: '5px' }}>{comment.commentText}</div>
                        </div>
                    );
                })}
        </div>
    );
};

export default FullComments;
