import React, { createContext, useContext, useState } from 'react';

const ApplicationContext = createContext();

export const useApplicationContext = () => {
    return useContext(ApplicationContext);
};

export const ApplicationContextProvider = ({ children }) => {
    const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false);

    return (
        <ApplicationContext.Provider value={{ isCreatePostModalOpen, setIsCreatePostModalOpen }}>
            {children}
        </ApplicationContext.Provider>
    );
};
