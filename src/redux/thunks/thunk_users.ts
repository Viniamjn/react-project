import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { apiService } from "../../services/api.services";

export const loadUsers = createAsyncThunk('userSlice/loadUsers', async (_, thunkAPI) => {
    try {
        const usersFromAPI = await apiService.userService.getAll<IUser[]>('/users');
        return thunkAPI.fulfillWithValue(usersFromAPI);
    } catch (e) {
        return thunkAPI.rejectWithValue(e);
    }
});