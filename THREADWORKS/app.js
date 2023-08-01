const express = require("express");
const upload = require('express-fileupload');
const app = express();


const mongoose=require("mongoose");
mongoose.set('strictQuery', true);
const bodyParser = require("body-parser");

app.use(upload())

app.set("view engine", "ejs");

app.get('/', (req, res)=>{
    console.log(__dirname);
    res.sendFile(__dirname + '/frontend/index.html')
})

app.get('/index.html', (req, res)=>{
    res.sendFile(__dirname + '/frontend/index.html')
})
app.get('/mens/menstop.html', (req, res)=>{
    res.sendFile(__dirname + '/frontend/mens/menstop.html')
})

app.get('/mens/mensfootwear.html', (req, res)=>{
    res.sendFile(__dirname + '/frontend/mens/mensfootwear.html')
})
app.get('/mens/mensbottomwear.html', (req, res)=>{
    res.sendFile(__dirname + '/frontend/mens/mensbottomwear.html')
})
app.get('/mens/mensacc.html', (req, res)=>{
    res.sendFile(__dirname + '/frontend/mens/mensacc.html')
})

app.get('/womens/womentopwear.html', (req, res)=>{
    res.sendFile(__dirname + '/frontend/womens/womentopwear.html')
})
app.get('/womens/womenbottomwear.html', (req, res)=>{
    res.sendFile(__dirname + '/frontend/womens/womenbottomwear.html')
})
app.get('/womens/womenfootwear.html', (req, res)=>{
    res.sendFile(__dirname + '/frontend/womens/womenfootwear.html')
})
app.get('/womens/womenacc.html', (req, res)=>{
    res.sendFile(__dirname + '/frontend/womens/womenacc.html')
})
app.get('/login.html', (req, res)=>{
    res.sendFile(__dirname + '/frontend/login.html')
})
app.get('/Signup.html', (req, res)=>{
    res.sendFile(__dirname + '/frontend/Signup.html')
});
app.get('/gethelp.html', (req,res)=>{
    res.sendFile(__dirname+'/frontend/gethelp.html');
})
app.get('/gethelp.html', (req,res)=>{
    res.sendFile(__dirname+'/frontend/gethelp.html');
})
app.get('/TermsofUse.html', (req,res)=>{
    res.sendFile(__dirname+'/frontend/tou.html');
})
app.get('/PrivacyPolicy.html', (req,res)=>{
    res.sendFile(__dirname+'/frontend/tou.html');
})





// POST:::::::::::::::::::;;

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

    var signup=mongoose.model("signups", mySchema);

    app.post('/SignUp.html', (req, res)=>{
    var info={
    username:req.body.username,
    email:req.body.email,
    password:req.body.password
   };
    
var me = new signup (info);

me.save().then(()=>{
    console.log("data sent in mongo");
}).catch((err)=>{
    console.log(err);
})

res.sendFile(__dirname + '/frontend/index.html');
});


// To get a user detail

app.get('/getdetails', function(req, res){
    console.log(req.query.email +" " +req.query.password);
    const email = req.query.email;
    const password = req.query.password;
    signup.find({ email: email, password: password }).limit(1).then(founditem =>{
        res.render("index", {details:founditem})
    })  
})




module.exports = app;