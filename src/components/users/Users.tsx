import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store/store';
import { userSliceAction } from '../../redux/slice/usersSlice';
import style from '../../all.module.css'

const Users = () => {
    const { users } = useAppSelector(state => state.userSliceHimself);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userSliceAction.loadUsers());
    }, [dispatch]);

    return (
        <div>
            {users.map(user => (
                <div key={user.id} className={style.posts}>{user.username}</div>
            ))}
        </div>
    );
};

export default Users;
