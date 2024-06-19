import { connectDb } from "@/app/ui/connectDb"

export const GET = async (request)=>{
 
  
    const dabase  = await connectDb()
    
    
    const bookcollection = await dabase.collection('book')
    const res1 = await bookcollection.find({}).toArray()
   
    return Response.json(res1)
}