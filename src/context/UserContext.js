import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

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

    const { user } = useAuth0();
    useEffect(() => {
        if (user) {
            const { sub } = user;
            const userId = sub.slice(sub.indexOf('|') + 1, sub.length);
            const newUser = {
                userId: userId,
                userName: user.nickname,
                name: user.name,
                image: user.picture || 'www.image.ca',
            };
            setLoggedInUser(newUser);
            console.log(newUser);
        }
    }, [user]);

    return (
        <UserContext.Provider
            value={{ loggedInUser, setLoggedInUser, users, setUsers, getAllUsers }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
