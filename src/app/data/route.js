import { connectDb } from "../ui/connectDb"


export const GET = async (request)=>{
    const data = request.json()

    const db = await connectDb()

    const userdata = await db.find(data).toArray()
    
    return Response.json({
       userdata
    })
  
}