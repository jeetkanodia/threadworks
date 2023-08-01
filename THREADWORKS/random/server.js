const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
app.use(bodyParser.urlencoded({extended:true}));

var Schema = mongoose.Schema;

var url="mongodb://127.0.0.1:27017/databasename";
mongoose.connect(url, {useNewUrlParser:true});

var mySchema = new mongoose.Schema({
    username:String,
    password:String});
var signup=mongoose.model("signups", mySchema);

app.get("/" , (req,res)=>{
    res.sendFile(__dirname + "/index.html");
})

app.post("/getdetails" ,(req,res)=>{
    var info={
        username:req.body.username,
        password:req.body.pass
    };
    var me = new signup(info);
    me.save().then(()=>{
        console.log("data sent in mongo");
    }).catch((err)=>{
        console.log(err);
    })

    res.send("Saved the data");
})


app.listen(2000,()=>{
    console.log("server started at 2000 port");
})