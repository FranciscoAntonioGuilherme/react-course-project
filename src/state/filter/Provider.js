import React, { useProvider } from 'react';
// FilterContext está em pascal case por ser um component
import FilterContext from './Context';
// filterReducer está em cameCase por ser uma função e não um component
import filterReducer from './reducer';
import { useReducer } from 'react';

function Provider({ children }) {
    const [filter, dispatchToFilter] = useReducer(filterReducer, 'all');
    return(
        <FilterContext.Provider value={{ filter, dispatchToFilter }}>
            { children }
        </FilterContext.Provider>
    );
}

export default Provider;
