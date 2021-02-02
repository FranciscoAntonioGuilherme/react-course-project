import reducer from './reducer';
import * as todosTypes from './types';

/*
Estrutura de um ToDo ->

    const todo = {
    id,
    title,
    completed
}
*/

export function addTodo(title) {
    return {
        type: todosTypes.ADD_TODO,
        payload: {
            title: title
        }
    }
}

export function toggleTodoStatus(id, completed) {
    return {
        type: todosTypes.TOGGLE_TODO_STATUS,
        payload: {
            id: id,
            completed: completed
        }
    }
}

export function toggleTodoTitle(id, title) {
    return {
        type: todosTypes.TOGGLE_TODO_TITLE,
        payload: {
            id: id,
            title: title
        }
    }
}

export function removeTodo(id) {
    return {
        type: todosTypes.ROMOVE_TODO,
        payload: {
            id: id
        }
    }
}
