import React, { createContext, useContext, useState } from 'react';

const ApplicationContext = createContext();

export const useApplicationContext = () => {
    return useContext(ApplicationContext);
};

export const ApplicationContextProvider = ({ children }) => {
    const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false);
    const [isDiscardPostModalOpen, setIsDiscardPostModalOpen] = useState(false);
    const [files, setFiles] = useState([]);
    const [postDesc, setPostDesc] = useState('');

    return (
        <ApplicationContext.Provider
            value={{
                isCreatePostModalOpen,
                setIsCreatePostModalOpen,
                isDiscardPostModalOpen,
                setIsDiscardPostModalOpen,
                files,
                setFiles,
                postDesc,
                setPostDesc,
            }}
        >
            {children}
        </ApplicationContext.Provider>
    );
};
