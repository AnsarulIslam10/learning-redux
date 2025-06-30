import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
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

type DraftTask = Pick<ITask, 'title' | "description" | "dueDate" | "priority">;

const createTask = (taskData: DraftTask): ITask => {
    return { id: nanoid(), isCompleted: false, ...taskData }
}


const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<DraftTask>) => {
            const taskData = createTask(action.payload)
            state.tasks.push(taskData);
        },
        toggleCompleteState: (state, action: PayloadAction<string>) => {
            console.log(action)
            state.tasks.forEach((task) => task.id === action.payload ? task.isCompleted = !task.isCompleted : task)
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        }
    }
})

export const selectTasks = (state: RootState) => {
    return state.todo.tasks
}
export const selectFilter = (state: RootState) => {
    return state.todo.filter
}

export const { addTask, toggleCompleteState, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;