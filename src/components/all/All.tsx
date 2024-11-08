import React, { useEffect } from 'react';
import {useAppDispatch, useAppSelector } from '../../redux/store/store';
import { allSliceAction } from '../../redux/slice/allSlice';
import style from '../../all.module.css'
const All = () => {
    const { comments,posts } = useAppSelector(state => state.allSliceHimself);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(allSliceAction.loadAll());
    }, [dispatch]);

    return (
        <div>
            {posts.map(posts => (
                <div key={posts.id} className={style.posts}>{posts.userId} {posts.title}</div>
            ))}
            {comments.map(comments=>(<div key={comments.id} className={style.posts}>{comments.postId} {comments.body}</div> ))}
        </div>
    );
};

export default All;