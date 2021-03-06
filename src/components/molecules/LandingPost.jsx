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
});

const LandingPost = (props) => {
    const { loggedInUser, addCommentApi } = useUserContext();
    const { getAllPostsApi } = usePostContext();
    const classes = useStyles();
    const { post } = props;
    const user = {
        image: post.profileImage,
        userName: post.userName,
    };

    const [text, setText] = useState('');

    const handleSubmitComment = (e) => {
        const data = {
            userId: loggedInUser.userId,
            postId: post.postId,
            commentText: text,
            likeCount: 0,
        };

        if (e.key === 'Enter' || e.type === 'click') {
            setText('');

            addCommentApi(data)
                .then((res) => res.json())
                .then((resData) => {
                    setText('');
                    getAllPostsApi();
                });
        }
    };

    return (
        <div style={{ width: '100%' }}>
            <div className={classes.topPart}>
                <div className={classes.profileAndUserName}>
                    <ProfileAvatar user={user} isHideUserName />
                    <HoverUserName userName={post.userName} userId={post.userId} />
                </div>
                <MoreHorizIcon className={classes.more} />
            </div>

            <img src={'/images/img_girl.jpeg'} alt='girl in jacket' width='100%' />

            <LikeCommentMessage />

            <div className={classes.likes}>{post.likeCount} likes</div>

            <Comments
                userId={post.userId}
                userName={post.userName}
                postDesc={post.postDesc}
                fullComments={post.fullComments}
                isFromLandingPost={true}
                postId={post.postId}
            />
            <CommentInput text={text} setText={setText} handleSubmitComment={handleSubmitComment} />
        </div>
    );
};

export default LandingPost;
