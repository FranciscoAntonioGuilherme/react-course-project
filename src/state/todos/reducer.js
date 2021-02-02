import * as todoTypes from './types';
import { v4 as uuidv4 } from 'uuid';

function reducer(state, action) {
    // Em todo reducer haverá um swith case
    switch (action.type) {
        // Testa cada um dos types criados
        case todoTypes.ADD_TODO:
            // Criamos (CREAT) um novo array,
            // ... com cancat para não destruir o array anterior.
            return state.concat({
                id: uuidv4(),
                title: action.payload.title,
                completed: false
            });
        case todoTypes.TOGGLE_TODO_STATUS:
            return state.map((todo) => {
                if (todo.id == action.payload.id) {
                    return { ...todo, completed: action.payload.completed }
                } else {
                    return todo;
                }
            });
        case todoTypes.TOGGLE_TODO_TITLE:
            return state.map((todo) => {
                if (todo.id == action.payload.id) {
                    return { ...todo, title: action.payload.title }
                } else {
                    return todo;
                }
            });
        case todoTypes.ROMOVE_TODO:
            return state.filter((todo) => {
                return todo.id !== action.payload.id
            });
        // Sempre é necessário ter um default
        default:
            throw new Error();
    }
}

export default reducer;
