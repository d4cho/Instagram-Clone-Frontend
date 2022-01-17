import React, { createContext, useContext, useState } from 'react';

const ApplicationContext = createContext();

export const useApplicationContext = () => {
    return useContext(ApplicationContext);
};

export const ApplicationContextProvider = ({ children }) => {
    const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(true);
    const [isDiscardPostModalOpen, setIsDiscardPostModalOpen] = useState(false);
    const [files, setFiles] = useState([]);

    return (
        <ApplicationContext.Provider
            value={{
                isCreatePostModalOpen,
                setIsCreatePostModalOpen,
                isDiscardPostModalOpen,
                setIsDiscardPostModalOpen,
                files,
                setFiles,
            }}
        >
            {children}
        </ApplicationContext.Provider>
    );
};
