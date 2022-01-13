import React from 'react';
import { makeStyles } from '@mui/styles';
import Popover from '@mui/material/Popover';
import UserSummaryContainer from '../organisms/UserSummaryContainer';

const useStyles = makeStyles({
    userName: {
        cursor: 'pointer',
        '&:hover': {
            textDecoration: 'underline',
        },
        fontSize: '14px',
        color: '#262626',
        fontWeight: 'bold',
    },
});

const HoverUserName = (props) => {
    const classes = useStyles();
    const { userName, userId } = props;

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMouseOver = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <div className={classes.userName} onMouseOver={handleMouseOver}>
                {userName}
            </div>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <UserSummaryContainer userId={userId} />
            </Popover>
        </>
    );
};

export default HoverUserName;
