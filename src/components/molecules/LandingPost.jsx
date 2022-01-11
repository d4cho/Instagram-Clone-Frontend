import React, { useState } from 'react';
import ProfileAvatar from '../atoms/ProfileAvatar';
import { makeStyles } from '@mui/styles';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import HoverUserName from '../atoms/HoverUserName';
import LikeCommentMessage from '../atoms/LikeCommentMessage';
import Comments from '../atoms/Comments';
import CommentInput from '../atoms/CommentInput';
import { useUserContext } from '../../context/UserContext';
import { usePostContext } from '../../context/PostContext';

const useStyles = makeStyles({
    topPart: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: '16px',
    },
    profileAndUserName: {
        display: 'flex',
        alignItems: 'center',
    },
    more: {
        cursor: 'pointer',
    },
    likes: {
        fontSize: '14px',
        fontWeight: 'bold',
        paddingLeft: '20px',
    },
    viewAllComments: {
        fontSize: '14px',
        color: '#8e8e8e',
        padding: '10px 0 0 20px',
        cursor: 'pointer',
    },
});

const LandingPost = (props) => {
    const { loggedInUser } = useUserContext();
    const { getAllPosts } = usePostContext();
    const classes = useStyles();
    const { post } = props;
    const user = {
        image: post.profileImage,
        userName: post.userName,
    };
    const numComments = post.fullComments.length + 1;
    const [text, setText] = useState('');

    const handleSubmitComment = (e) => {
        const data = {
            userId: loggedInUser.userId,
            postId: post.postId,
            commentText: text,
            likeCount: 5,
        };

        if (e.key === 'Enter' || e.type === 'click') {
            setText('');

            fetch('http://localhost:8083/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then((res) => res.json())
                .then((resData) => {
                    console.log(resData);
                    setText('');
                    getAllPosts();
                });
        }
    };

    return (
        <div style={{ width: '100%' }}>
            <div className={classes.topPart}>
                <div className={classes.profileAndUserName}>
                    <ProfileAvatar user={user} isHideUserName />
                    <HoverUserName userName={post.userName} />
                </div>
                <MoreHorizIcon className={classes.more} />
            </div>
            <div>{post.image}</div>

            <LikeCommentMessage />

            <div className={classes.likes}>{post.likeCount} likes</div>

            {<div className={classes.viewAllComments}>{`View all ${numComments} comments`}</div>}

            <Comments
                userName={post.userName}
                postDesc={post.postdesc}
                fullComments={post.fullComments}
            />
            <CommentInput text={text} setText={setText} handleSubmitComment={handleSubmitComment} />
        </div>
    );
};

export default LandingPost;
