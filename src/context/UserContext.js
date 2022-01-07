import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUserContext = () => {
    return useContext(UserContext);
};

export const UserContextProvider = ({ children }) => {
    const [users, setUsers] = useState([]);

    const getAllUsers = () => {
        fetch('http://localhost:8081/users')
            .then((res) => res.json())
            .then((userData) => {
                setUsers(userData.users);
            });
    };

    return (
        <UserContext.Provider value={{ users, setUsers, getAllUsers }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
