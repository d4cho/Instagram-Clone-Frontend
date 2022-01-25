import React, { createContext, useContext, useState } from 'react';
import { useUserContext } from './UserContext';

const PostContext = createContext();

export const usePostContext = () => {
    return useContext(PostContext);
};

export const PostContextProvider = ({ children }) => {
    const { accessToken } = useUserContext();
    const [allPosts, setAllPosts] = useState([]);

    // APIs

    const getAllPostsApi = () => {
        fetch('http://localhost:8082/posts', {
            method: 'GET',
            headers: new Headers({
                Authorization: 'Bearer ' + accessToken,
                'Content-Type': 'application/json',
            }),
        })
            .then((res) => res.json())
            .then((posts) => {
                setAllPosts(posts.fullPosts);
            });
    };

    const getPostByPostIdApi = (postId) => {
        return fetch(`http://localhost:8082/posts/${postId}`, {
            method: 'GET',
            headers: new Headers({
                Authorization: 'Bearer ' + accessToken,
                'Content-Type': 'application/json',
            }),
        });
    };

    const getPostByUserIdApi = (userId) => {
        return fetch(`http://localhost:8082/posts/user/${userId}`, {
            method: 'GET',
            headers: new Headers({
                Authorization: 'Bearer ' + accessToken,
                'Content-Type': 'application/json',
            }),
        });
    };

    const addPostApi = (body) => {
        return fetch('http://localhost:8082/posts', {
            body: JSON.stringify(body),
            method: 'POST',
            headers: new Headers({
                Authorization: 'Bearer ' + accessToken,
                'Content-Type': 'application/json',
            }),
        });
    };

    return (
        <PostContext.Provider
            value={{
                allPosts,
                setAllPosts,
                getAllPostsApi,
                getPostByUserIdApi,
                addPostApi,
                getPostByPostIdApi,
            }}
        >
            {children}
        </PostContext.Provider>
    );
};

export default PostContext;
