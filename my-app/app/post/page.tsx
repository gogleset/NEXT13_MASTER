import React, { Suspense } from "react"
import { getPosts, getPostId } from "../helper/fetchHelper"
import Post from "./post"
import Loading from "../UI/Loading"

const page = async () => {
  // *Suspense pattern (async await)*
  // const posts = getPosts()

  // *conditional rendering*
  // const postsId = await getPostId(1)
  // const [posts, postsId] = await Promise.all([getPosts(), getPostId(1)])
  // console.log(postsId.result)
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>

      {/* *Suspense pattern * */}
      <Suspense fallback={<Loading />}>
        {/* async await */}
        {/* {posts && <Post postPromise={posts} />} */}
        
        {/* use */}
        <Post />
      </Suspense>

      {/* *conditional rendering* */}
      {/* {postsId && (
        <div className="mb-2">
          <h1 className="text-blue-300">{postsId.result.title}</h1>
          {postsId.result.body}
          <div>{postsId.buildTime}</div>
        </div>
      )} */}
    </div>
  )
}

export default page
