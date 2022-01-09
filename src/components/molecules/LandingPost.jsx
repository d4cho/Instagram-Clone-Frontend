import React from 'react';
import ProfileAvatar from '../atoms/ProfileAvatar';
import { makeStyles } from '@mui/styles';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import HoverUserName from '../atoms/HoverUserName';
import LikeCommentMessage from '../atoms/LikeCommentMessage';

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
    const classes = useStyles();
    const { post } = props;
    const user = {
        image: post.profileImage,
        userName: post.userName,
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

            <div>comments</div>
            <div>input comments</div>
        </div>
    );
};

export default LandingPost;
