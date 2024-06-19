const { MongoClient, ServerApiVersion } = require("mongodb");


// Create a MongoClient with a MongoClientOptions object to set the Stable API version


// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
let db;

export const connectDb = async ()=>{
  if(db){
    return db
  }
  
 try {
  const uri = "mongodb+srv://NextJs:oNoimHa0fK7HivY7@cluster0.cgsbnjt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  
  db = client.db('NextJs')

 
  return db
  
 } catch (error) {
  console.log(error)
 }
}

export const respone = async ()=>{
  const data1 = await fetch('http://localhost:3000/api/coments')
  const res = await data1.json()
  return res
 

}
export const bookData = async ()=>{
  const bookfetch = await fetch('http://localhost:3000/api/book')
 
  const bookres = await bookfetch.json()
  return bookres
 

}
export const team = async ()=>{
  const bookfetch = await fetch('http://localhost:3000/api/team')
 
  const bookres = await bookfetch.json()
  return bookres
 

}

