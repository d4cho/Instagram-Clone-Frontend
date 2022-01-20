import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SendIcon from '@mui/icons-material/Send';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ExploreIcon from '@mui/icons-material/Explore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Popover from '@mui/material/Popover';
import { makeStyles } from '@mui/styles';
import SearchedUser from '../molecules/SearchedUser';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useNavigate } from 'react-router-dom';
import { useApplicationContext } from '../../context/ApplicationContext';
import { useAuth0 } from '@auth0/auth0-react';

const useStyles = makeStyles({
    searchResults: {
        width: '375px',
    },
});

const settings = ['Profile', 'Saved', 'Settings', 'Switch accounts', 'Log out'];

const ResponsiveAppBar = () => {
    const { logout } = useAuth0();
    const { setIsCreatePostModalOpen } = useApplicationContext();
    const navigate = useNavigate();
    const classes = useStyles();
    const [anchorElSettings, setAnchorElSettings] = useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [searchVal, setSearchVal] = useState('');
    const [usersFromSearch, setUsersFromSearch] = useState([]);

    const handleOpenSettings = (event) => {
        setAnchorElSettings(event.currentTarget);
    };

    const handleCloseSettings = () => {
        setAnchorElSettings(null);
    };

    const handleSubmit = (event) => {
        if (event.key === 'Enter') {
            setAnchorEl(event.currentTarget);

            fetch(`http://localhost:8081/users?userName=${searchVal}`)
                .then((res) => res.json())
                .then((resData) => {
                    setUsersFromSearch(resData.users);
                });
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <AppBar
            color='inherit'
            position='fixed'
            style={{
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Grid
                container
                style={{ padding: '0 200px' }}
                alignItems={'center'}
                justifyContent={'space-evenly'}
            >
                <Grid item xs={3}>
                    <Typography
                        variant='h6'
                        noWrap
                        component='div'
                        sx={{ mr: 2, display: { xs: 'flex', md: 'flex' } }}
                        style={{ cursor: 'pointer' }}
                        onClick={() => navigate('/')}
                    >
                        Instagram
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <TextField
                            id='search-bar'
                            variant='outlined'
                            size='small'
                            placeholder='Search'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                                endAdornment: searchVal ? (
                                    <InputAdornment position='end'>
                                        <HighlightOffIcon
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => setSearchVal('')}
                                        />
                                    </InputAdornment>
                                ) : null,
                                style: { backgroundColor: '#EFEFEF' },
                            }}
                            onKeyDown={(e) => handleSubmit(e)}
                            value={searchVal}
                            onChange={(e) => setSearchVal(e.target.value)}
                        />
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                        >
                            <div className={classes.searchResults}>
                                {usersFromSearch.map((user) => (
                                    <SearchedUser key={user.userId} user={user} />
                                ))}
                            </div>
                        </Popover>
                    </Box>
                </Grid>
                <Grid item xs={5}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-evenly',
                        }}
                    >
                        <IconButton onClick={() => navigate('/')}>
                            <HomeIcon />
                        </IconButton>
                        <IconButton>
                            <SendIcon />
                        </IconButton>
                        <IconButton onClick={() => setIsCreatePostModalOpen(true)}>
                            <AddCircleOutlineIcon />
                        </IconButton>
                        <IconButton>
                            <ExploreIcon />
                        </IconButton>
                        <IconButton>
                            <FavoriteBorderIcon />
                        </IconButton>
                        <IconButton onClick={handleOpenSettings}>
                            <Avatar alt='Daniel Cho' src='/static/images/avatar/2.jpg' />
                        </IconButton>

                        <Menu
                            sx={{ mt: '45px' }}
                            id='menu-appbar'
                            anchorEl={anchorElSettings}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElSettings)}
                            onClose={handleCloseSettings}
                        >
                            {settings.map((setting) => (
                                <MenuItem
                                    key={setting}
                                    onClick={
                                        setting === 'Log out'
                                            ? () =>
                                                  logout({
                                                      returnTo: window.location.origin,
                                                  })
                                            : null
                                    }
                                >
                                    <Typography textAlign='center'>{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Grid>
            </Grid>
        </AppBar>
    );
};
export default ResponsiveAppBar;
