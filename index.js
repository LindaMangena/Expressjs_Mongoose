// importing the expressModule into our application 
var express = require('express');

//intialising the application using express
var app = express();

//configuring routes 
app.get("/getUsers", (req,res)=>{
    res.send("Baba");
});

app.listen(4000);