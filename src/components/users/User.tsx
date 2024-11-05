import React, { FC } from 'react';
import { IUsers } from '../../modules/IUsers';
import { Link } from 'react-router-dom';

type UserProps={
    item:IUsers;
}
const User:FC<UserProps> = ({item}) => {
    return (
        <div>
            <Link to={item.id.toString()}>{item.firstName}</Link>

        </div>
    );
};

export default User;