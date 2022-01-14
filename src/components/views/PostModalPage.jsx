import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const PostModalPage = (props) => {
    const { openModal } = props;
    const navigate = useNavigate();

    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        if (openModal) {
            setOpen(openModal);
        }
    }, [openModal]);

    const handleClose = () => {
        setOpen(false);
        navigate(-1);
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
        >
            <Box sx={style}>test</Box>
        </Modal>
    );
};

export default PostModalPage;
