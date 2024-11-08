import {PayloadAction,createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { loadUsers } from "../thunks/thunk_users";
import { UserSliceType } from "../models.slice/usersTypes";

const userInitState: UserSliceType={
    users:[]
}

export const userSlice=createSlice({
    name:'userSlice',
    initialState:userInitState,
    reducers:{
        xxx:(state,action: PayloadAction)=>{

        }
    },
    extraReducers: builder=>
        builder
            .addCase(loadUsers.fulfilled,(state,action:PayloadAction<IUser[]>)=>{
                state.users=action.payload;
            })
            .addCase(loadUsers.rejected,(state,action:PayloadAction<any>)=>{
                console.log(action.payload);
            })
})

export const userSliceAction={...userSlice.actions,loadUsers}
