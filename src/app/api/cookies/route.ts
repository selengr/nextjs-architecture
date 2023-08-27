import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
 
export async function GET(request: Request) {
const { searchParams } = new URL(request.url)
  const name = searchParams.get('code')
  const cookieStore = cookies()
  const token = cookieStore.get(name!)
 
  return new Response(`token=${token!.value}` , {
    status: 200
  })

}

export async function POST(request: Request) {

const res = await request.json()


 const cookieStore = cookies()
 
 cookieStore.set('res.name' , res.value)
    console.log(res.name , res.value)
 
  return new NextResponse(res, {
    status: 201
  })
}

