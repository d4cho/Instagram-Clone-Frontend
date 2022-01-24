import React, { createContext, useContext, useState } from 'react';

const PostContext = createContext();

export const usePostContext = () => {
    return useContext(PostContext);
};

export const PostContextProvider = ({ children }) => {
    const [allPosts, setAllPosts] = useState([]);

    // APIs

    const getAllPostsApi = () => {
        fetch('http://localhost:8082/posts')
            .then((res) => res.json())
            .then((posts) => {
                setAllPosts(posts.fullPosts);
            });
    };

    const getPostByPostIdApi = (postId) => {
        return fetch(`http://localhost:8082/posts/${postId}`);
    };

    const getPostByUserIdApi = (userId) => {
        return fetch(`http://localhost:8082/posts/user/${userId}`);
    };

    const addPostApi = (body) => {
        return fetch('http://localhost:8082/posts', {
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
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
