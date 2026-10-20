'use client'
import React, { createContext } from 'react';

export const OurContext = createContext();

const ContextProvider = ({children}) => {
    let demo = 'Tanha'
    return (
        <OurContext.Provider value={demo}>{children}</OurContext.Provider>
    );
};

export default ContextProvider;