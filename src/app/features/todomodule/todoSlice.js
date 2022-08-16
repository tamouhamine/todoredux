import { createSlice } from "@reduxjs/toolkit";
import ToDo from "../../../models/ToDo";

const initialState = {
    todos: [
        new ToDo(1, 'Task 1', false),
        new ToDo(2, 'Task 2', true),
        new ToDo(3, 'Task 3', false)
        /* {id:1,title:'task 1',completed:false},
        {id:2,title:'task 2',completed:true}*/
    ]
}

export const ToDoSlice = createSlice({
    name: 'todoReducer',
    initialState,
    reducers: {
        addNewTask: (state, actions) => {
            state.todos.push(new ToDo(state.todos + 1, actions.payload, false))
        },
        deleteTask: (state, actions) => {
            state.todos = state.todos.filter(todo => {
                return todo.id != actions.payload
            })
        },
        serachTasks: (state, actions) => {
            return state.todos.filter(todo => {
                return todo.title.toLocaleLowerCase().includes(actions.payload.toLocaleLowerCase())
            })
        },
        changeToDoCheckBox: (state, actions) => {
            state.todos = state.todos.map(todo => {
                if (todo.id === actions.payload) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        },
        showCompletedTasks: (state) => {
            state.todos = state.todos.filter(todo => {
                return todo.completed === true
            })
        },
        showNotCompletedTasks: (state) => {
            state.todos = state.todos.filter(todo => {
                return todo.completed === true
            })
        }
    }
})

export const getAllTasks = (state) => {
    return state.todo
}

export default ToDoSlice.reducer
export const {
    addNewTask,
    deleteTask,
    serachTasks,
    changeToDoCheckBox,
    showCompletedTasks,
    showNotCompletedTasks
} = ToDoSlice.actions

