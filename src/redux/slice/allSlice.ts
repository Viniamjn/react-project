import {PayloadAction, createSlice, isFulfilled, isRejected } from "@reduxjs/toolkit";
import { AllSliceType } from "../models.slice/allTypes";
import { loadAll } from "../thunks/thunk_all";
import { IPosts } from "../../models/IPosts";
import { IComments } from "../../models/IComments";

const allInitState: AllSliceType = {
    posts: [],
    comments: []
};

export const allSlice=createSlice({
    name:'allSlice',
    initialState:allInitState,
    reducers:{

    },
    extraReducers: builder=>
        builder
            .addMatcher(isRejected(loadAll), (state, action) => {
                // sendLogAboutCommonError()

            })
            .addMatcher(isFulfilled(loadAll), (state, action: PayloadAction<{ posts: IPosts[]; comments: IComments[] }>) => {
                state.posts = action.payload.posts;
                state.comments = action.payload.comments;
            })
})

export const allSliceAction={...allSlice.actions,loadAll}