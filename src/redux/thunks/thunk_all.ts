import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../../services/api.services";
import { IPosts } from "../../models/IPosts";
import { IComments } from "../../models/IComments";

export const loadAll = createAsyncThunk('allSlice/loadAll', async (_, thunkAPI) => {
    try {
        const [posts, comments] = await Promise.all([
            apiService.postService.getAll<IPosts[]>('/posts'),
            apiService.commentService.getAll<IComments[]>('/comments')
        ]);

        return thunkAPI.fulfillWithValue({ posts, comments });
    } catch (e) {
        return thunkAPI.rejectWithValue(e);
    }
});
