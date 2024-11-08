import React, { useEffect } from 'react';
import {useAppDispatch, useAppSelector } from '../../redux/store/store';
import { commentsSliceAction } from '../../redux/slice/commentsSlice';
import style from '../../all.module.css'

const Comments = () => {
    const { comments } = useAppSelector(state => state.commentsSliceHimself);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(commentsSliceAction.loadComments());
    }, [dispatch]);

    return (
        <div>
            {comments.map(comments => (
                <div key={comments.id} className={style.posts}>{comments.postId} {comments.body}</div>
            ))}
        </div>
    );
};

export default Comments;