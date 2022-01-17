import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import UploadImage from '../organisms/UploadImage';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px 0',
        borderBottom: '1px solid #bdbdbd',
        fontSize: '14px',
        fontWeight: 'bold',
    },
});

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: '10px',
    boxShadow: 24,
    // p: 1,
    width: 671,
    height: 714,
};

const CreateNewPost = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Box sx={style}>
                    <div className={classes.title}>Create new post</div>
                    <UploadImage />
                </Box>
            </Modal>
        </div>
    );
};

export default CreateNewPost;
