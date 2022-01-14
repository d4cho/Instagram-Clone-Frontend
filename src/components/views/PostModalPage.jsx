import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useNavigate, useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 1,
};

const PostModalPage = (props) => {
    const { openModal } = props;
    const params = useParams();
    const { postId } = params;
    const navigate = useNavigate();
    const [open, setOpen] = useState(openModal);
    const [postData, setPostData] = useState({});

    useEffect(() => {
        fetch(`http://localhost:8082/posts/${postId}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setPostData(data);
            });
    }, [postId]);

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
            <Box sx={style}>
                <Grid container>
                    <Grid item xs={8}>
                        image
                    </Grid>
                    <Grid item xs={4} container direction='column'>
                        <div>avatar bar</div>
                        <div>comments</div>
                        <div>comment bar</div>
                        <div>input</div>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
};

export default PostModalPage;
