import React from 'react';
import { useParams } from 'react-router-dom';

const UserPage = () => {
    const params = useParams();
    return (
        <div
            style={{
                border: '1px solid red',
                paddingTop: '20px',
                margin: '60px 15vw 0 15vw',
            }}
        >
            <div>{params.userName}'s Page</div>
        </div>
    );
};

export default UserPage;
