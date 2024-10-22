import React, { FC } from 'react';
import { IUsers } from "../../models/IUsers";

type UsersProps = {
    item: IUsers;
};

const User: FC<UsersProps> = ({ item }) => {
    return (
        <div>
            {item.id.toString()} {item.name}
        </div>
    );
};

export default User;
