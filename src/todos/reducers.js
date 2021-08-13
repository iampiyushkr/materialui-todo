// import { loadData, saveData } from "../../utils/localStorage";

import { ADD_TODO_SUCCESS, ADD_TODO_FAILURE, ADD_TODO_REQUEST, GET_TODO_SUCCESS, GET_TODO_FAILURE, GET_TODO_REQUEST } from "./actionTypes";

const initialState = {
    todos: [],
    isLoading: false,
    isError: false,
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_TODO_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        }
        case ADD_TODO_SUCCESS: {
            return {
                ...state,
                todos: [...state.todos, payload],
                isLoading: false,
                isError: false
            }
        }
        case ADD_TODO_FAILURE: {
            return {
                ...state,
                isError: true
            }
        }
        case GET_TODO_REQUEST: {
            return {
                ...state,
                isError: false,
                isLoading: true
            };
        }
        case GET_TODO_SUCCESS: {
            return {
                ...state,
                todos: payload,
                isLoading: false,
                isError: false
            }
        }
        case GET_TODO_FAILURE: {
            return {
                ...state,
                isError: true
            }
        }

        default: return state
    }
}

export { reducer }