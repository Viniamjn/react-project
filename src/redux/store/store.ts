import {configureStore} from "@reduxjs/toolkit"
import {useDispatch, useSelector } from "react-redux"
import { userSlice } from "../slice/usersSlice";
import { postsSlice } from "../slice/postsSlice";
import { commentsSlice } from "../slice/commentsSlice";
import { allSlice } from "../slice/allSlice";


 export const store=configureStore({
     reducer:{
         userSliceHimself:userSlice.reducer,
         postsSliceHimself:postsSlice.reducer,
         commentsSliceHimself:commentsSlice.reducer,
         allSliceHimself:allSlice.reducer

     }
 });
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>()
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();