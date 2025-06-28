import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
interface IinitialState {
    task: ITask[];
}
const initialState: IinitialState = {
    task: [
        {
            id: 'asdasdfsd',
            title: "Initialize frontend",
            description: "Create Home page, and routing",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "High",
        },
    ]
}
const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {}
})

export default taskSlice.reducer;