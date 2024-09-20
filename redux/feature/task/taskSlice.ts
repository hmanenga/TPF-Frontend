import { createSlice } from "@reduxjs/toolkit";
import { Task,TaskState } from "../../../src/types/types";


  
// Initial state
const initialState: TaskState = {
    tasks: [],
    currentTask: null,
    isLoading: true,
};
const taskSlice = createSlice({
    name:'task',
    initialState,
    reducers: {}
});


export default taskSlice.reducer;
