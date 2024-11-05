import React, {useEffect, useState } from 'react';
import { IUsers } from '../modules/IUsers';
import { apiService } from '../services/api-service';
import User from '../components/users/User';


const HomePage = () => {

    const [users, setUsers]=useState<IUsers[]>([]);
    useEffect(() => {
        apiService.usersService.getAll<{users: IUsers[] }>('/users')
            .then(value=>setUsers(value.users))

    }, []);
    return (
        <div>
            {
                users.map((users:IUsers)=>(<User item={users} key={users.id}/>))
            }
        </div>
    );
};

export default HomePage;