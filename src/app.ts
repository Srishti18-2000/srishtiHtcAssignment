
import express from 'express'
import { connectToMongo } from './databaseConnection/mongodbConnection';
import { registerMiddlewares } from './routes';


export const startServer=async()=>{
try{
    const app = express()
    registerMiddlewares(app)
    await connectToMongo()
    app.listen(process.env.PORT||3000,()=>{console.log("App Started!!")})
   
   
}
catch(error){
    console.log("Unable to start server")
    process.exit(1)
}
}
