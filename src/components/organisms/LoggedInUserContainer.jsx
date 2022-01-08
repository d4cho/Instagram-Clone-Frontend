import React from 'react';
import LoggedInUser from '../molecules/LoggedInUser';

const LoggedInUserContainer = () => {
    return (
        <div style={{ position: 'fixed' }}>
            <LoggedInUser />
        </div>
    );
};

export default LoggedInUserContainer;
