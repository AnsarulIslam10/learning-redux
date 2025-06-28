import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './features/counter/counterSlice';
import taskReducer from './features/task/taskSlice'
export const store = configureStore({
    reducer: {
        counter: counterSlice,
        tasks: taskReducer
    },

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;