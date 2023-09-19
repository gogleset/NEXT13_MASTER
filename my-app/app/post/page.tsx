import React from 'react';
import { getPosts, getPostId } from '../helper/fetchHelper';


const page = async () => {
    // const posts = await getPosts();
    // const postsId = await getPostId(1)
    const [posts, postsId] = await Promise.all([getPosts(), getPostId(1)]);
    return (
       <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Posts</h1>
            {posts && posts.map((items:any, index:number) => {
                return (
                    <div className='mb-2' key={index}>
                        <h1 className='text-red-300'>{items.title}</h1>
                        {items.body}
                    </div>
                )
            })}
            {postsId && 
                    <div className='mb-2' >
                        <h1 className='text-blue-300'>{postsId.title}</h1>
                        {postsId.body}
                    </div>
            }
        </div>
    );
};

export default page;