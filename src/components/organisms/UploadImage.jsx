import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '671px',
    },
    icon: {
        fontSize: '50px',
    },
    text: {
        padding: '20px 0',
        fontSize: '22px',
        fontWeight: 300,
    },
});

const UploadImage = () => {
    const classes = useStyles();

    const onDrop = useCallback((acceptedFiles) => {
        // Do something with the files
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div className={classes.container} {...getRootProps()}>
            <input {...getInputProps()} />
            <div className={classes.icon}>
                <AddAPhotoIcon fontSize='inherit' />
            </div>
            <div className={classes.text}>Drag photos and videos here</div>
            <Button className={classes.button} variant='contained'>
                Select From Computer
            </Button>
        </div>
    );
};

export default UploadImage;
