import React, { FC } from 'react';
import {IComments} from '../../models/ICommets'
interface CommentsProps{
    item:IComments
}
const Comment:FC<CommentsProps> = ({item}) => {
    return (
        <div>
            {item.postId} {item.body}
        </div>
    );
};

export default Comment;