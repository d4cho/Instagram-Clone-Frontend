import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUserContext = () => {
    return useContext(UserContext);
};

export const UserContextProvider = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useState({
        userId: 2,
        userName: 'd4cho',
        name: 'dan cho',
        image: 'www.test.ca',
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
