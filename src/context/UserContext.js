import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const UserContext = createContext();

export const useUserContext = () => {
    return useContext(UserContext);
};

export const UserContextProvider = ({ children }) => {
    const { user, getAccessTokenSilently } = useAuth0();
    const [loggedInUser, setLoggedInUser] = useState({
        userId: 2,
        userName: 'd4cho',
        name: 'dan cho',
        image: 'www.test.ca',
    });
    const [users, setUsers] = useState([]);
    const [accessToken, setAccessToken] = useState(null);
    console.log('user: ', user);
    console.log('accessToken: ', accessToken);

    useEffect(() => {
        const getAccessToken = async () => {
            try {
                const newAccessToken = await getAccessTokenSilently();
                setAccessToken(newAccessToken);
            } catch (e) {
                console.log('error:', e.message);
            }
        };

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
            getAccessToken();
        }
    }, [getAccessTokenSilently, user]);

    // API CALLS

    const getAllUsersApi = () => {
        fetch('http://localhost:8081/users/private', {
            method: 'GET',
            headers: new Headers({
                Authorization: 'Bearer ' + accessToken,
                'Content-Type': 'application/json',
            }),
        })
            .then((res) => res.json())
            .then((userData) => {
                setUsers(userData.users);
            });
    };

    const getUserByUserNameApi = (searchVal) => {
        return fetch(`http://localhost:8081/users/private?userName=${searchVal}`, {
            method: 'GET',
            headers: new Headers({
                Authorization: 'Bearer ' + accessToken,
                'Content-Type': 'application/json',
            }),
        });
    };

    const getUserByUserIdApi = (userId) => {
        return fetch(`http://localhost:8081/users/private/${userId}`, {
            method: 'GET',
            headers: new Headers({
                Authorization: 'Bearer ' + accessToken,
                'Content-Type': 'application/json',
            }),
        });
    };

    const addCommentApi = (data) => {
        return fetch('http://localhost:8083/comments', {
            method: 'POST',
            headers: new Headers({
                Authorization: 'Bearer ' + accessToken,
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify(data),
        });
    };

    const getCommentsByPostIdApi = (postId) => {
        return fetch(`http://localhost:8083/comments/${postId}`, {
            method: 'GET',
            headers: new Headers({
                Authorization: 'Bearer ' + accessToken,
                'Content-Type': 'application/json',
            }),
        });
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
                accessToken,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
