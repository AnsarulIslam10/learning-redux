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
            priority: "high",
        },
        {
            id: 'asdasdfsdasdfsa',
            title: "Initialize backden",
            description: "Create api routes",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "medium",
        },
        {
            id: 'asdasdfsdfdfsafd',
            title: "Initialize FullStack",
            description: "Do everything",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "low",
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
        },
        updateFilter: (state, action: PayloadAction<"all" | "high" | "medium" | "low">) => {
            state.filter = action.payload
        }
    }
})

export const selectTasks = (state: RootState) => {
    const filter = state.todo.filter;
    if (filter === 'low') {
        return state.todo.tasks.filter(task => task.priority === 'low');
    } else if (filter === 'medium') {
        return state.todo.tasks.filter(task => task.priority === 'medium');
    } else if (filter === 'high') {
        return state.todo.tasks.filter(task => task.priority === 'high');
    } else {
        return state.todo.tasks;
    }
}
export const selectFilter = (state: RootState) => {
    return state.todo.filter
}

export const { addTask, toggleCompleteState, deleteTask, updateFilter } = taskSlice.actions;

export default taskSlice.reducer;