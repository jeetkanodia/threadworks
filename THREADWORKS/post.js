const express = require("express");
const app = require("./app");
const mongoose=require("mongoose");
mongoose.set('strictQuery', true);
const bodyParser = require("body-parser");

// defining schema
var Schema = mongoose.Schema;
// connection url and mongodb connection
var url="mongodb://127.0.0.1:27017/threadworks";
mongoose.connect(url, {useNewUrlParser:true});

app.use(bodyParser.urlencoded({extended:true}));
// Schema creation
var mySchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String});
    // get the data through the form

    var signup=mongoose.model("signup", mySchema);

    app.post('/SignUp.html', (req, res)=>{
    var info={
    username:req.body.username,
    email:req.body.email,
    password:req.body.password
   };
    
var me = new d1slot (info);
me.save(function (err) {
if (err) {
console.log("error occured");
}
else
{
console.log("done");
}
});
res.send("Done!")
});
app.listen(8000, ()=> console.log("listening on 8000"));