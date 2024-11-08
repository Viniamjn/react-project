import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../../services/api.services";
import {IComments} from "../../models/IComments"

export const loadComments = createAsyncThunk('commentsSlice/loadComments', async (_, thunkAPI) => {
    try {
        const commentsFromAPI = await apiService.commentService.getAll<IComments[]>('/comments');
        return thunkAPI.fulfillWithValue(commentsFromAPI);
    } catch (e) {
        return thunkAPI.rejectWithValue(e);
    }
});