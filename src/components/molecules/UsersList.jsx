import React from 'react';
import ProfileAvatar from '../atoms/ProfileAvatar';

const UsersList = (props) => {
    const { users } = props;

    return (
        <>
            {users.map((user) => (
                <ProfileAvatar key={user.userId} user={user} />
            ))}
        </>
    );
};

export default UsersList;
