import React, { useEffect } from 'react';
import {useAppDispatch, useAppSelector } from '../../redux/store/store';
import { postsSliceAction } from '../../redux/slice/postsSlice';
import style from '../../all.module.css'

const Posts = () => {
    const { posts } = useAppSelector(state => state.postsSliceHimself);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postsSliceAction.loadPosts());
    }, [dispatch]);

    return (
        <div>
            {posts.map(posts => (
                <div key={posts.id} className={style.posts}>{posts.userId} {posts.title}</div>
            ))}
        </div>
    );
};

export default Posts;