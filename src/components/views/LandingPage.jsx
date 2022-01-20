import React from 'react';
import Grid from '@mui/material/Grid';
import UsersListContainer from '../organisms/UsersListContainer';
import LoggedInUserContainer from '../organisms/LoggedInUserContainer';
import AllPostsContainer from '../organisms/AllPostsContainer';
import useMediaQuery from '@mui/material/useMediaQuery';
import PostModalPage from './PostModalPage';
import { withAuthenticationRequired } from '@auth0/auth0-react';

const LandingPage = (props) => {
    const { openModal } = props;
    const matches = useMediaQuery('(min-width:600px)');

    return (
        <div
            style={{
                paddingTop: '20px',
                margin: '60px 15vw 0 15vw',
                width: matches ? '50%' : '80%',
            }}
        >
            {openModal ? <PostModalPage openModal={openModal} /> : null}
            <Grid container spacing={2}>
                <Grid item md={8} xs={12}>
                    <UsersListContainer />
                    <AllPostsContainer />
                </Grid>
                <Grid item md={4} xs={0}>
                    <LoggedInUserContainer />
                </Grid>
            </Grid>
        </div>
    );
};

export default withAuthenticationRequired(LandingPage, {
    onRedirecting: () => <div>Loding...</div>,
});
