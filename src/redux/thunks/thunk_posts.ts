import { createAsyncThunk } from "@reduxjs/toolkit";
import { IPosts } from "../../models/IPosts";
import { apiService } from "../../services/api.services";

export const loadPosts = createAsyncThunk('postsSlice/loadPosts', async (_, thunkAPI) => {
    try {
        const postsFromAPI = await apiService.postService.getAll<IPosts[]>('/posts');
        return thunkAPI.fulfillWithValue(postsFromAPI);
    } catch (e) {
        return thunkAPI.rejectWithValue(e);
    }
});