/**
 * 1. Creating an express server
 * 2. Connect to mongo db
 * 3. Initialize express
 * 4. Initialise express middleware
 * 5. create a simple get request route
 * 6. inject our routes
 * 7. Listen to our app connection
 */

//Num 1
const express = require('express');
//this function does not exist yet but will be created
const connectDB = require('./db');
require('dotenv').config(); //allows us to use environmental variable
const {PORT} = process.env; //deconstructing

//connect to db
connectDB();

//initialise express
const app = express();

//initialise express middleware
app.use(express.json({extended:false}))

//create a basic express route
app.get('/', (req, res) =>res.json({message: "Welcome to flight booking app"}));

//PORT
const port = process.env.PORT ||PORT;

//listen
app.listen(port,  () => console.log(`app running on port ${port}`))