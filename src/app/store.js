import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./features/todomodule/todoSlice"

export const store = configureStore({
    reducer : {
        todo : todoSlice
    }
})