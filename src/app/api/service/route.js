import { connectDb } from "@/app/ui/connectDb"

export const GET = async (request)=>{
 
  
    const service  = await connectDb()
    const collection= await service.collection('service')
    const res = await collection.find({}).toArray()
    
    
   
    return Response.json(res)
  }
  