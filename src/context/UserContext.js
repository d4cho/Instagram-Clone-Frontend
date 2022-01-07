import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUserContext = () => {
    return useContext(UserContext);
};

export const UserContextProvider = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useState({
        image: 'www.test.ca',
        name: 'Daniel Cho',
        userId: 123,
        userName: 'd4cho',
    });
    const [users, setUsers] = useState([]);

    const getAllUsers = () => {
        fetch('http://localhost:8081/users')
            .then((res) => res.json())
            .then((userData) => {
                setUsers(userData.users);
            });
    };

    return (
        <UserContext.Provider
            value={{ loggedInUser, setLoggedInUser, users, setUsers, getAllUsers }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
