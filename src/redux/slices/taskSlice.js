import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiService from "../../api/apiService";

const initialState = {
    tasks: [],
    loading: false,
    error: null
}


export const addTask = createAsyncThunk('tasks/addTask', async (details) => {
    try {
        const response = await apiService.post('/tasks/add', {
            title: details
        });
        return response.data;
    } catch (err) {
        throw new Error(err.response?.data?.message || 'An error occurred');
    }
});

export const updateTask = createAsyncThunk('tasks/updateTask', async(details) => {
    try {
        const response = await apiService.put(`/tasks/edit/${details.id}`, details);
        return response.data;
    } catch(err) {
        throw new Error(err.response?.data?.message || 'An error occurred');
    }
});

export const deleteTask = createAsyncThunk('tasks/deleteTaskById', async(id) => {
    try {
        const response = await apiService.delete(`/tasks/delete/${id}`);
        return response.data;
    } catch (err) {
        throw new Error(err.response?.data?.message || 'An error occurred');
    }
});

export const getAllTasks = createAsyncThunk('tasks/getAllTasks', async() => {
    try {
        const response = await apiService.get('/tasks');
        return response.data;
    } catch (err) {
        throw new Error(err.response?.data?.message || 'An error occurred');
    }
});


const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getAllTasks.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(getAllTasks.fulfilled, (state, action) => {
            state.loading = false;
            state.tasks = action.payload.tasks
        })
        .addCase(getAllTasks.rejected, (state, action) => {
            state.loading = false;
            state.tasks = [];
            state.error = action.error.message
        })
        .addCase(addTask.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(addTask.fulfilled, (state, action) => {
            state.loading = false;
            state.tasks.push(action.payload.task);
        })  
        .addCase(addTask.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
        .addCase(deleteTask.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(deleteTask.fulfilled, (state, action) => {
            state.loading = false;
            state.tasks = state.tasks.filter(task => task._id !== action.payload.id)
        })
        .addCase(deleteTask.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export default taskSlice.reducer;