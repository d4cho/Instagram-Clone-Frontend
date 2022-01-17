import React, { useCallback, useEffect } from 'react';
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

const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box',
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden',
};

const img = {
    display: 'block',
    width: 'auto',
    height: '100%',
};

const UploadImage = (props) => {
    const { files, setFiles } = props;
    const classes = useStyles();

    const onDrop = useCallback((acceptedFiles) => {
        setFiles(
            acceptedFiles.map((file) =>
                Object.assign(file, {
                    preview: URL.createObjectURL(file),
                })
            )
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    const thumbs = files.map((file) => (
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
                <img src={file.preview} style={img} alt={file.name} />
            </div>
        </div>
    ));

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach((file) => URL.revokeObjectURL(file.preview));
    }, [files]);

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
            {thumbs}
        </div>
    );
};

export default UploadImage;
