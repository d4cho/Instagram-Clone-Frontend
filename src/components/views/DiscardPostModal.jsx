import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useApplicationContext } from '../../context/ApplicationContext';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderBottom: '1px solid #bdbdbd',
        width: '100%',
        padding: '30px 0',
    },
    discardPost: {
        fontSize: '18px',
        fontWeight: 'bold',
        padding: '10px 0',
    },
    leave: {
        fontSize: '14px',
        color: '#8e8e8e',
    },
    discardBtn: {
        display: 'flex',
        justifyContent: 'center',
        padding: '15px 0',
        borderBottom: '1px solid #bdbdbd',
        width: '100%',
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#ed4956',
        cursor: 'pointer',
    },
    cancelBtn: {
        padding: '15px 0',
        fontSize: '14px',
        color: '#262626',
        cursor: 'pointer',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
});

const DiscardPostModal = () => {
    const {
        isDiscardPostModalOpen,
        setIsDiscardPostModalOpen,
        setIsCreatePostModalOpen,
        setFiles,
        setPostDesc,
    } = useApplicationContext();
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
        width: 400,
        // height: 201,
    };

    const handleClose = () => setIsDiscardPostModalOpen(false);
    const handleDiscard = () => {
        setIsDiscardPostModalOpen(false);
        setIsCreatePostModalOpen(false);
        setFiles([]);
        setPostDesc('');
    };
    const handleCancel = () => setIsDiscardPostModalOpen(false);

    return (
        <Modal
            open={isDiscardPostModalOpen}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
        >
            <Box sx={style}>
                <div className={classes.container}>
                    <div className={classes.textContainer}>
                        <div className={classes.discardPost}>Discard post?</div>
                        <div className={classes.leave}>If you leave, your post won't be saved.</div>
                    </div>
                    <div className={classes.discardBtn} onClick={handleDiscard}>
                        Discard
                    </div>
                    <div className={classes.cancelBtn} onClick={handleCancel}>
                        Cancel
                    </div>
                </div>
            </Box>
        </Modal>
    );
};

export default DiscardPostModal;
