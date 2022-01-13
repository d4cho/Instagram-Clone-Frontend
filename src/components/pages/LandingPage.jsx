import React from 'react';
import Grid from '@mui/material/Grid';
import UsersListContainer from '../organisms/UsersListContainer';
import LoggedInUserContainer from '../organisms/LoggedInUserContainer';
import AllPostsContainer from '../organisms/AllPostsContainer';

const LandingPage = () => {
    return (
        <div
            style={{
                border: '1px solid red',
                paddingTop: '20px',
                margin: '60px 15vw 0 15vw',
                width: '50%',
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <UsersListContainer />
                    <AllPostsContainer />
                </Grid>
                <Grid item xs={4}>
                    <LoggedInUserContainer />
                </Grid>
            </Grid>
        </div>
    );
};

export default LandingPage;
