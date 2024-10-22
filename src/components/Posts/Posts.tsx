import React, {useEffect, useState } from 'react';
import { IPosts } from '../../models/IPosts';
import { apiService } from '../../services/api-service';
import Post from '../Post/Post';

const Posts = () => {
    const [posts,setPosts]=useState<IPosts[]>([]);
    useEffect(() => {
        apiService.postService.getAll<IPosts[]>('/posts')
            .then(value => setPosts(value));
    }, []);
    return (
        <div>
            {
                posts.map((post:IPosts)=>(<Post item={post} key={post.id}/>))
            }
        </div>
    );
};

export default Posts;