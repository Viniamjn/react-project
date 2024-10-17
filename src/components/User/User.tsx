import React, {FC} from 'react';
import {IUsers} from "../../models/IUsers";
import {Link} from "react-router-dom";

type UsersProps = {
    item: IUsers;
}
const User: FC<UsersProps> = ({item}) => {
    return (
        <div>
            <Link state={{data: item}} to={item.id.toString()}>{item.firstName}</Link>
        </div>
    );
};

export default User;