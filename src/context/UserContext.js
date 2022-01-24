import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const UserContext = createContext();

export const useUserContext = () => {
    return useContext(UserContext);
};

export const UserContextProvider = ({ children }) => {
    const { user } = useAuth0();
    const [loggedInUser, setLoggedInUser] = useState({
        userId: 2,
        userName: 'd4cho',
        name: 'dan cho',
        image: 'www.test.ca',
    });
    const [users, setUsers] = useState([]);

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

    // API CALLS

    const getAllUsersApi = () => {
        fetch('http://localhost:8081/users')
            .then((res) => res.json())
            .then((userData) => {
                setUsers(userData.users);
            });
    };

    const getUserByUserNameApi = (searchVal) => {
        return fetch(`http://localhost:8081/users?userName=${searchVal}`);
    };

    const getUserByUserIdApi = (userId) => {
        return fetch(`http://localhost:8081/users/${userId}`);
    };

    const addCommentApi = (data) => {
        return fetch('http://localhost:8083/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    };

    const getCommentsByPostIdApi = (postId) => {
        return fetch(`http://localhost:8083/comments/${postId}`);
    };

    return (
        <UserContext.Provider
            value={{
                loggedInUser,
                setLoggedInUser,
                users,
                setUsers,
                getAllUsersApi,
                addCommentApi,
                getCommentsByPostIdApi,
                getUserByUserNameApi,
                getUserByUserIdApi,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
