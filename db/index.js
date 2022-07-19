/**
 * 1. create a connection function for mongodb
 * 2. start a local mongodb  server connection
 */

const mongoose = require('mongoose');
require('dotenv').config();
const { MONGO_URI } = process.env;

//create the connection function
// const connectionDB =()=>{
//     mongoose.connect(MONGO_URI, {
//         useNewUrlParser: true,
//         useCreateIndex: true,
//         useUnifiedTopology: true,
//         useFindAndModify: false
//     }).then(()=>{
//         console.log("mongodb connected...");
//         //send data
//     }).catch((err) => {
//         console.error(err.message);

//         //exit with failure
//     })
// }

const connectDB = async()=>{
    try{
        await mongoose.connect(MONGO_URI, {
           useNewUrlParser: true,
//         useCreateIndex: true,
//         useUnifiedTopology: true,
//         useFindAndModify: false    
        });
        console.log("MongoDB connected....");
        //send data
    }
    catch(err){
        console.log(err.message)

        //exit with failure
        process.exit(1);
    }
}

module.exports = connectDB;