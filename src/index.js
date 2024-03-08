// require('dotenv').config({path:'./env'})
import dotenv from 'dotenv'
import connectDB from "./db/index.js";
import expres from 'express'
import { app } from './app.js';


dotenv.config({
    path:'./env'
})





connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()  =>{
        console.log(`server is running at port :  ${process.env.PORT}`)
    })

})
.catch(err=>{
    console.log('Mongodb Connection failed !!!', err );
})





















// import express from "express";
// const app = express()(async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("ERROR NAME IS : ", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log("error in connecting", error);
//     throw err;
//   }
// })();
