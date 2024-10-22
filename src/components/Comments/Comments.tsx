import React, {useEffect, useState } from 'react';
import { IComments } from '../../models/ICommets';
import { apiService } from '../../services/api-service';
import Comment from '../Comment/Comment'
const Comments = () => {
    const [comments, setComments]=useState<IComments[]>([]);
    useEffect(() => {
        apiService.commentService.getAll<IComments[]>('/comments')
            .then(value=>setComments(value));

    }, []);
    return (
        <div>
            {
                comments.map((comment:IComments)=>(<Comment item={comment} key={comment.id}/>))
            }
        </div>
    );
};

export default Comments;