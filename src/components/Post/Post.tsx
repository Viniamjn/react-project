import React, { FC } from 'react';
import { IPosts } from '../../models/IPosts';

type PostsProps = {
    item: IPosts;
};

const User: FC<PostsProps> = ({ item }) => {
    return (
        <div>
            {item.userId} {item.title}
        </div>
    );
};

export default User;
