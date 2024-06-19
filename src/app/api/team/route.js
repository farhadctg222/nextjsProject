import { connectDb } from "@/app/ui/connectDb"

export const GET = async (request)=>{
 
  
    const dabase  = await connectDb()
    const collection= await dabase.collection('team')
    const res = await collection.find({}).toArray()
    
    
   
    return Response.json(res)
  
   
   
  }