import React, { createContext, useContext, useState } from 'react';

const PostContext = createContext();

export const usePostContext = () => {
    return useContext(PostContext);
};

export const PostContextProvider = ({ children }) => {
    const [allPosts, setAllPosts] = useState([]);

    const getAllPosts = () => {
        fetch('http://localhost:8082/posts')
            .then((res) => res.json())
            .then((posts) => {
                setAllPosts(posts.fullPosts);
            });
    };

    return (
        <PostContext.Provider value={{ allPosts, setAllPosts, getAllPosts }}>
            {children}
        </PostContext.Provider>
    );
};

export default PostContext;
