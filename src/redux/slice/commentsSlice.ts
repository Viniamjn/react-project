import {PayloadAction, createSlice } from "@reduxjs/toolkit";
import { loadComments } from "../thunks/thunk_comments";
import { CommentsSliceType } from "../models.slice/commentsTypes";
import { IComments } from "../../models/IComments";

const commentsInitState: CommentsSliceType={
    comments:[]
}

export const commentsSlice=createSlice({
    name:'commentsSlice',
    initialState:commentsInitState,
    reducers:{
        xxx:(state,action: PayloadAction)=>{

        }
    },
    extraReducers: builder=>
        builder
            .addCase(loadComments.fulfilled,(state,action:PayloadAction<IComments[]>)=>{
                state.comments=action.payload;
            })
            .addCase(loadComments.rejected,(state,action:PayloadAction<any>)=>{
                console.log(action.payload);
            })
})

export const commentsSliceAction={...commentsSlice.actions,loadComments}