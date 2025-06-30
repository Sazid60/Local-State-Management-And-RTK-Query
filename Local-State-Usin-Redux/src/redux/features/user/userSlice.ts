import type { RootState } from "@/redux/store";
import type { IUser } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
interface InitialState {
    users: IUser[]
}
const initialState: InitialState = {
    users: [
        {
            id: "QBpNSd38i-t1s_IcdhhX9",
            name: "sazid"
        },
        {
            id: "QBpNSd38i-t1s_IcdhhXdfd",
            name: "shakil"
        }
    ]
}
type DraftUser = Pick<IUser, "name">
const createUser = (userData: DraftUser): IUser => {
    return { id: nanoid(), ...userData }
}

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        addUser: (state, action: PayloadAction<IUser>) => {
            const userData = createUser(action.payload);
            // console.log(userData)
            state.users.push(userData)
        },
        removeUser: (state, action: PayloadAction<string>) => {
            state.users = state.users.filter((user) => user.id != action.payload)
        }
    }
})

export const selectUser = (state: RootState) => {
    return state.user.users
}

export const { addUser, removeUser } = userSlice.actions

export default userSlice.reducer