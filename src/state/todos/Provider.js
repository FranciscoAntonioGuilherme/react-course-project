import React, { useProvider } from 'react';
// FilterContext está em pascal case por ser um component
import TodoContext from './Context';
// filterReducer está em cameCase por ser uma função e não um component
import todoReducer from './reducer';
import { useReducer } from 'react';

function Provider({ children }) {
    const [todos, dispatchToTodos] = useReducer(todoReducer, []);
    return(
        <TodoContext.Provider value={{ todos, dispatchToTodos }}>
            { children }
        </TodoContext.Provider>
    );
}

export default Provider;
