import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log("middleware")

  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    console.log(request.url, "middleware, /dashboard")
    // Router로 넘기기 가능(중간다리 middleware이기 때문)
    const newHeader = new Headers(request.headers)
    newHeader.set("some-thing-header", "something from header")
    newHeader.set("request-time", new Date().getTime().toString())

    // Router로 넘기기 가능(중간다리 middleware이기 때문)
    const response = NextResponse.next({
      request: {
        headers: newHeader,
      },
    })
    response.cookies.set({
      name: "foo",
      value: "true",
      path: "/",
    })
    return response
  }

  if (request.nextUrl.pathname.startsWith("/login")) {
    console.log(request.url, "middleware, /login")
    let verify = true
    if (verify) {
      return NextResponse.redirect(new URL("/", request.url))
    }
  }

  if (request.nextUrl.pathname.startsWith("/api/post")) {
    console.log(request.url, "middleware, /api/post")
    const newHeader = new Headers(request.headers)
    newHeader.set("some-thing-header", "something from header")
    // Router로 넘기기 가능(중간다리 middleware이기 때문)
    const response = NextResponse.next({
      request: {
        headers: newHeader,
      },
    })
    return response
  }
}

export const config = {
  matcher: ["/dashboard", "/login/:path*", "/api/post/:path*"],
}
