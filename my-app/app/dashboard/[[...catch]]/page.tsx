import React from "react"
import { headers, cookies } from "next/headers"
type PageParams = {
  catch: string[]
}

const page = ({ params }: { params: PageParams }) => {
  const header = headers()
  const cookie = cookies()
  console.log({ params })
  console.log("middleware request-time: ", header.get("request-time"))
  console.log("middleware response-time: ", cookie.get("foo"))
  return (
    <div>
      {params.catch ? (
        params.catch.map((value) => {
          return <span className="mr-2">{value}</span>
        })
      ) : (
        <span>not found params</span>
      )}
    </div>
  )
}

export default page
