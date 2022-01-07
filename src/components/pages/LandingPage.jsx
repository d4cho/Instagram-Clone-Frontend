import React from 'react';
import Grid from '@mui/material/Grid';
import UsersListContainer from '../organisms/UsersListContainer';
import LoggedInUserContainer from '../organisms/LoggedInUserContainer';

const LandingPage = () => {
    return (
        <div style={{ border: '1px solid red', paddingTop: '20px', margin: '0 15vw 0 15vw' }}>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <UsersListContainer />
                    <div>left bottom</div>
                </Grid>
                <Grid item xs={4}>
                    <LoggedInUserContainer />
                </Grid>
            </Grid>
        </div>
    );
};

export default LandingPage;
