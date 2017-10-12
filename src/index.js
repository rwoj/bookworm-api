import express from 'express'
import path from 'path'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import Promise from 'bluebird'

require('dotenv').load();
import auth from "./routes/auth"
import users from "./routes/users"

const app=express();
app.use(bodyParser.json())
mongoose.Promise=Promise;
mongoose.connect(process.env.MONGO_URI, {useMongoClient: true});

app.use("/api/auth", auth)
app.use("/api/users", users)

app.get('/*', (req,res)=>{
  res.sendFile(path.join(__dirname,'index.html'));
})

app.listen(8080, ()=>console.log("running on localhost:8080"))
