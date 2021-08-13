import {v4 as uuid} from "uuid"
import axios from "axios";
import { ADD_TODO_REQUEST, ADD_TODO_FAILURE, ADD_TODO_SUCCESS, GET_TODO_REQUEST, GET_TODO_FAILURE, GET_TODO_SUCCESS } from "../todos/actionTypes";

const addTodoRequest = () => {
    return {
        type: ADD_TODO_REQUEST,
    };
};
const addTodoSuccess = (payload) => {
    return {
        type: ADD_TODO_SUCCESS,
        payload,
    };
};
const addTodoFailure = (payload) => {
    return {
        type: ADD_TODO_FAILURE,
        payload,
    };
};

const addTodo = (payload) => (dispatch) => {
    dispatch(addTodoRequest());
    return axios.post("https://json-server-mocker-masai.herokuapp.com/tasks", {
        title: payload,
        status: false,
        id:uuid()
    }).then((res) => {
        dispatch(addTodoSuccess(res.data))
    }).catch((err) => {
        dispatch(addTodoFailure(err))
    });
};
const getTodoRequest = () => {
    return {
        type: GET_TODO_REQUEST,
    };
};
const getTodoSuccess = (payload) => {
    return {
        type: GET_TODO_SUCCESS,
        payload,
    };
};
const getTodoFailure = (payload) => {
    return {
        type: GET_TODO_FAILURE,
        payload,
    };
};

const getTodo = (url) => (dispatch) => {
    dispatch(getTodoRequest());
    return axios.get(url)
        .then((res) => {
            dispatch(getTodoSuccess(res.data))
        })
        .catch((err) => {
            dispatch(getTodoFailure(err))
        });
};

export { addTodo, getTodo };




