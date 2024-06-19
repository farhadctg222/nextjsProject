import { connectDb } from "@/app/ui/connectDb"
import { NextResponse } from "next/server"

export const GET = async (request)=>{
 
  
    const dabase  = await connectDb()
    const collection= await dabase.collection('team')
    const res = await collection.find({}).toArray()
    
    
   
    return NextResponse.json(res)
  
   
   
  }