import React, { useState, createContext, useEffect } from 'react';
import data from '../../../utils/data.json';

export const CardContext = createContext();

export const CardProvider = ({children}) => {

    const [searchField, setSearchField] = useState("");
    const [on, setOn] = useState(false);
    
    const filteredData = data.filter((picture) =>
    picture.description.toLowerCase().includes(searchField.toLowerCase())
  );

    return (
        <CardContext.Provider
            value={{
                searchField, setSearchField, filteredData, on, setOn
            }}
        >
            {children}
        </CardContext.Provider>
    )
}
