import React, { use } from "react"

import { getPosts } from "../helper/fetchHelper"

export type PostProps = {
  postPromise: Promise<any>
}

const post = async () => {
  const posts = await getPosts()
  return (
    <div>
      {posts &&
        posts.map((items: any, index: number) => {
          return (
            <div className="mb-2" key={index}>
              <h1 className="text-red-300">{items.title}</h1>
              {items.body}
            </div>
          )
        })}
    </div>
  )
}

export default post
