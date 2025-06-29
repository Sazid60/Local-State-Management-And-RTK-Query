import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";


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

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">
const createTask = (taskData: DraftTask): ITask => {
    return {
        id: nanoid(),
        isCompleted: false,
        ...taskData
    }
}
const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        // type action has been provided here. 
        addTask: (state, action: PayloadAction<DraftTask>) => {
            // const id = uuidv4();
            // const taskData = {
            //     ...action.payload,
            //     id,
            //     isCompleted: false
            // }
            const taskData = createTask(action.payload)
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

