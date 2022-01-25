import React from 'react';
import { makeStyles } from '@mui/styles';
import CreatePostDesc from '../molecules/CreatePostDesc';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        height: 571,
        width: '100%',
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

// const thumbInner = {
//     display: 'flex',
//     minWidth: 0,
//     overflow: 'hidden',
// };

const img = {
    display: 'block',
    width: '100%',
    height: '100%',
};

const UploadImage = (props) => {
    const { files } = props;
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
            <CreatePostDesc />
        </div>
    );
};

export default UploadImage;
