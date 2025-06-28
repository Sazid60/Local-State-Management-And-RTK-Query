import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

// make a type 

interface InitialState {
    tasks: ITask[],
    filter: "all" | "high" | "medium" | "low"
}
// this is giving a vibe of schema. 
const initialState: InitialState = {
    tasks: [
        // {
        //     id: "dskdjsdks",
        //     title: "Initialize Frontend",
        //     description: "Create Homepage and Routing",
        //     dueDate: "2025-11",
        //     isCompleted: false,
        //     priority: "High"
        // },
        // {
        //     id: "euryeur",
        //     title: "Create Github Repo",
        //     description: "Make the proper commits ",
        //     dueDate: "2025-11",
        //     isCompleted: false,
        //     priority: "Medium"
        // },
    ],
    filter: "all",
}
const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<ITask>) => {
            const id = uuidv4();
            const taskData = {
                ...action.payload,
                id,
                isCompleted: false
            }
            state.tasks.push(taskData)
            // here push is used. but why? its might mutate right? we do not have to think of it now. Mutation is handled by immer 
        }
    }
})

export const selectTasks = (state: RootState) => {
    return state.todo.tasks
}
export const selectFilter = (state: RootState) => {
    return state.todo.filter
}

export const { addTask } = taskSlice.actions

export default taskSlice.reducer

