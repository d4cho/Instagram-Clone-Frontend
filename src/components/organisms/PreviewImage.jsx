import React, { useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        height: 671,
    },
});

const thumb = {
    display: 'inline-flex',
    // borderRadius: 2,
    // border: '1px solid #eaeaea',
    // marginBottom: 8,
    // marginRight: 8,
    width: 671,
    height: '100%',
    // padding: 4,
    boxSizing: 'border-box',
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden',
};

const img = {
    display: 'block',
    width: '100%',
    height: '100%',
};

const UploadImage = (props) => {
    const { files, setFiles } = props;
    const classes = useStyles();

    const thumbs = files.map((file) => (
        <div style={thumb} key={file.name}>
            {/* <div style={thumbInner}> */}
            <img src={file.preview} style={img} alt={file.name} />
            {/* </div> */}
        </div>
    ));

    return (
        <div className={classes.container}>
            {thumbs}
            <div>stuff</div>
        </div>
    );
};

export default UploadImage;
