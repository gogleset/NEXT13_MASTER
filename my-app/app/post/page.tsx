import React from 'react';
import { getPosts } from '../helper/fetchHelper';

const page = async () => {
    const posts = await getPosts();
    
    return (
       <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Posts</h1>
            {posts.map((items:any) => {
                return (
                    <div className='mb-2'>
                        <h1 className='text-red-300'>{items.title}</h1>
                        {items.body}
                    </div>
                )
            })}
        </div>
    );
};

export default page;