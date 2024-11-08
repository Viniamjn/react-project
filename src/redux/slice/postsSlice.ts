import {PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PostsSliceType } from "../models.slice/postsTypes";
import { IPosts } from "../../models/IPosts";
import { loadPosts } from "../thunks/thunk_posts";

const postsInitState: PostsSliceType={
    posts:[]
}

export const postsSlice=createSlice({
    name:'postsSlice',
    initialState:postsInitState,
    reducers:{

    },
    extraReducers: builder=>
        builder
            .addCase(loadPosts.fulfilled,(state,action:PayloadAction<IPosts[]>)=>{
                state.posts=action.payload;
            })
            .addCase(loadPosts.rejected,(state,action:PayloadAction<any>)=>{
                console.log(state.posts=action.payload);
            })
})

export const postsSliceAction={...postsSlice.actions,loadPosts}
