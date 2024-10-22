import React, {useEffect, useState} from 'react';
import {apiService} from "../../services/api-service"
import {IUsers} from "../../models/IUsers";
import User from "../User/User";

const Users = () => {

    const [users, setUsers] = useState<IUsers[]>([]);
    useEffect(() => {
        apiService.userService.getAll<IUsers[]>('/users')
            .then(value => setUsers(value));
    }, []);
    return (
        <div>
            {
                users.map((user: IUsers) => (<User item={user} key={user.id}/>))
            }

        </div>
    );
};

export default Users;