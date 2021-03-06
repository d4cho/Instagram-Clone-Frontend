import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import UploadImage from '../organisms/UploadImage';
import PreviewImage from '../organisms/PreviewImage';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useApplicationContext } from '../../context/ApplicationContext';
import { useUserContext } from '../../context/UserContext';
import { makeStyles } from '@mui/styles';
import { usePostContext } from '../../context/PostContext';

const useStyles = makeStyles({
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 10px',
        borderBottom: '1px solid #bdbdbd',
        fontSize: '14px',
        fontWeight: 'bold',
    },
    back: {
        cursor: 'pointer',
    },
    share: {
        fontSize: '14px',
        color: '#0095f6',
        cursor: 'pointer',
    },
});

const CreateNewPost = () => {
    const {
        isCreatePostModalOpen,
        setIsCreatePostModalOpen,
        setIsDiscardPostModalOpen,
        files,
        setFiles,
        postDesc,
        setPostDesc,
    } = useApplicationContext();
    const { loggedInUser } = useUserContext();
    const { addPostApi } = usePostContext();
    const classes = useStyles();

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        // border: '2px solid #000',
        borderRadius: '10px',
        boxShadow: 24,
        // p: 1,
        width: files.length > 0 ? 1011 : 671,
        height: 614,
    };

    const handleClose = () => {
        if (files.length > 0) {
            setIsDiscardPostModalOpen(true);
        } else {
            setIsCreatePostModalOpen(false);
        }
    };

    const handleBackClick = () => {
        setIsDiscardPostModalOpen(true);
    };

    const handleShareClick = () => {
        const body = {
            userId: loggedInUser.userId,
            likeCount: 0,
            image: files[0].name,
            postDesc: postDesc,
        };

        addPostApi(body).then((res) => {
            console.log(res);
        });

        setFiles([]);
        setPostDesc('');
        setIsCreatePostModalOpen(false);
    };

    return (
        <div>
            <Modal
                open={isCreatePostModalOpen}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Box sx={style}>
                    <div className={classes.title}>
                        {files.length > 0 ? (
                            <ArrowBackIcon className={classes.back} onClick={handleBackClick} />
                        ) : (
                            <div />
                        )}
                        <div>Create new post</div>
                        {files.length > 0 ? (
                            <div className={classes.share} onClick={handleShareClick}>
                                Share
                            </div>
                        ) : (
                            <div />
                        )}
                    </div>
                    {files.length > 0 ? (
                        <PreviewImage files={files} setFiles={setFiles} />
                    ) : (
                        <UploadImage files={files} setFiles={setFiles} />
                    )}
                </Box>
            </Modal>
        </div>
    );
};

export default CreateNewPost;
