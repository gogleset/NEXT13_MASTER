import { NextResponse, NextRequest } from "next/server"
import { headers } from "next/headers"

export async function GET(request: NextRequest) {
  const httpHeaders = headers()
  console.info("httpHeaders: ", httpHeaders)
  console.info("request.headers: ", request.headers)
  const url = "https://jsonplaceholder.typicode.com"
  const res = await fetch(`${url}/posts`, { next: { revalidate: 60 } })
  const result = await res.json()

  return NextResponse.json({ result })
}

export async function POST(request: NextRequest) {
  return NextResponse.json({ ok: true, status: 200 })
}

export async function PUT(request: Request) {
  console.log(request.method)
  return NextResponse.json({ ok: true, status: 200 })
}

export async function DELETE(request: Request) {
  console.log(request.method)
  return NextResponse.json({ ok: true, status: 200 })
}
