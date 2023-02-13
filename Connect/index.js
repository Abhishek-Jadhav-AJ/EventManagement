var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
const { request, response } = require("express")

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))


app.use(bodyParser.urlencoded({
    extended:true
    
}))


mongoose.connect('mongodb://0.0.0.0:27017/EventManagement',{
    useNewUrlParser:true,
    useUnifiedTopology:true

});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

app.post("/sign_up", (req,res) => {
    var name = req.body.name;
    var email = req.body.email;
    var contact = req.body.contact;
    var date = req.body.date;
    var department = req.body.department;
    var password = req.body.password;
    var confirmpassword = req.body.confirmpassword;
    var data = {
        "name": name,
        "email" : email,
        "contact": contact,
        "date" : date ,
        "department":department,
        "password" : password,
        "confirmpassword": confirmpassword
    }

     db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });
    return res.redirect('login.html')
    
})

app.post("/studentfeedback" , (req , res)=>{
    var name = req.body.name;
    var email = req.body.email;
    var feedback = req.body.feedback;

    var data = {
        "name": name,
        "email" : email,
        "feedback" : feedback
    }

    db.collection('Studentfeedback').insert(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });
    return res.redirect('home.html')

})

app.post("/eventdata" , (req , res)=>{
    var name = req.body.name;
    var department = req.body.department;
    var eventname = req.body.eventname;


    var data = {
        "name": name,
        "department" : department,
        "eventname" : eventname,
        "Status" : "Yes"
    }

    db.collection('ParticipantsData').insert(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });
    return res.redirect('event.html')

})



app.post("/paymentdata" , (req , res)=>{
    var id = req.body.id;
    var amount = req.body.paymentAmount;
    var type = req.body.paymentType;


    var data = {
        "ID": id,
        "Amount" : amount,
        "type" : "Online",
    }

    db.collection('QuizPaymentData').insert(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });


    return res.redirect('http://localhost:5000/quiz')

})


app.post("/paymentdata1" , (req , res)=>{
    var id = req.body.id;
    var amount = req.body.paymentAmount;
    var type = req.body.paymentType;


    var data = {
        "ID": id,
        "Amount" : amount,
        "type" : "Online",
    }

    db.collection('CodingPaymentData').insert(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });


    return res.redirect('http://localhost:4000/card')

})

app.post("/paymentdata2" , (req , res)=>{
    var id = req.body.id;
    var amount = req.body.paymentAmount;
    var type = req.body.paymentType;


    var data = {
        "ID": id,
        "Amount" : amount,
        "type" : "Online",
    }

    db.collection('CulturalPaymentData').insert(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });


    return res.redirect('http://localhost:3000/event1')

})

app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })

    return res.redirect('home.html');

}).listen(5500);

console.log("listening on port 5500 ")