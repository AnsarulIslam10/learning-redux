import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
interface IinitialState {
    tasks: ITask[];
    filter: "all" | "high" | "medium" | "low"
}
const initialState: IinitialState = {
    tasks: [
        {
            id: 'asdasdfsd',
            title: "Initialize frontend",
            description: "Create Home page, and routing",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "High",
        },
        {
            id: 'asdasdfsdasdfsa',
            title: "Initialize backden",
            description: "Create api routes",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "Medium",
        },
        {
            id: 'asdasdfsdfdfsafd',
            title: "Initialize FullStack",
            description: "Do everything",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "Low",
        },
    ],
    filter: "all"
}
const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {}
})

export const selectTasks = (state: RootState) => {
    return state.todo.tasks
}
export const selectFilter = (state: RootState) => {
    return state.todo.filter
}

export default taskSlice.reducer;