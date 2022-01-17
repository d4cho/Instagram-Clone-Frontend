import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useNavigate, useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import ProfileAvatar from '../atoms/ProfileAvatar';
import HoverUserName from '../atoms/HoverUserName';
import LikeCommentMessage from '../atoms/LikeCommentMessage';
import FullComments from '../atoms/FullComments';
import CommentInput from '../atoms/CommentInput';
import { useUserContext } from '../../context/UserContext';

const useStyles = makeStyles({
    imgContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    img: {
        objectFit: 'contain',
    },
    avatarBar: {
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid #bdbdbd',
    },
    comments: {
        height: '400px',
        overflow: 'scroll',
    },
});

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxHeight: '600px',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 0,
};

const PostModalPage = (props) => {
    const classes = useStyles();
    const { openModal } = props;
    const params = useParams();
    const { postId } = params;
    const navigate = useNavigate();
    const [open, setOpen] = useState(openModal);
    const [postData, setPostData] = useState({});
    const user = {
        userName: postData.userName,
        image: postData.image,
    };
    const [text, setText] = useState('');
    const { loggedInUser } = useUserContext();

    useEffect(() => {
        getPostByPostId();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClose = () => {
        setOpen(false);
        navigate(-1);
    };

    const handleSubmitComment = (e) => {
        const data = {
            userId: loggedInUser.userId,
            postId: postData.postId,
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
                    setText('');
                    getPostByPostId();
                });
        }
    };

    const getPostByPostId = () => {
        fetch(`http://localhost:8082/posts/${postId}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setPostData(data);
            });
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
        >
            <Box sx={style}>
                <Grid container>
                    <Grid item xs={8}>
                        <div className={classes.imgContainer}>
                            <img
                                className={classes.img}
                                src={'/images/img_girl.jpeg'}
                                alt='girl in jacket'
                                height='100%'
                            />
                        </div>
                    </Grid>
                    <Grid item xs={4} container direction='column'>
                        <div className={classes.avatarBar}>
                            <ProfileAvatar user={user} isHideUserName />
                            <HoverUserName userName={postData.userName} userId={postData.userId} />
                        </div>
                        <div className={classes.comments}>
                            {postData ? (
                                <FullComments
                                    image={postData.image}
                                    userName={postData.userName}
                                    postDesc={postData.postDesc}
                                    fullComments={postData.fullComments}
                                    userId={postData.userId}
                                />
                            ) : null}
                        </div>
                        <LikeCommentMessage />
                        <CommentInput
                            text={text}
                            setText={setText}
                            handleSubmitComment={handleSubmitComment}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
};

export default PostModalPage;
