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

const settings = ['Profile', 'Saved', 'Settings', 'Switch accounts', 'Log out'];

const ResponsiveAppBar = () => {
    const [anchorElSettings, setAnchorElSettings] = useState(null);

    const handleOpenSettings = (event) => {
        setAnchorElSettings(event.currentTarget);
    };

    const handleCloseSettings = () => {
        setAnchorElSettings(null);
    };

    return (
        <AppBar
            color='transparent'
            position='static'
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
                                style: { backgroundColor: '#EFEFEF' },
                            }}
                        />
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
                        <IconButton>
                            <HomeIcon />
                        </IconButton>
                        <IconButton>
                            <SendIcon />
                        </IconButton>
                        <IconButton>
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
                                <MenuItem key={setting}>
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
