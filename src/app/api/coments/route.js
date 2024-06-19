import { connectDb } from "../../ui/connectDb"

export const POST = async (request)=>{
  const newuser = await request.json()
  const db = await connectDb()
  
  const resp = db.insertOne(newuser)
  return Response.json({
    message:'message'
  })

 
 
}
export const GET = async (request)=>{
 
  
  const dabase  = await connectDb()
  const collection= await dabase.collection('data')
  const res = await collection.find({}).toArray()
  
  
 
  return Response.json(res)

 
 
}

