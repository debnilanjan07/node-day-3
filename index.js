const express = require('express');
const app = express()



const middle1 = function(req,res, next)  //  creating first middleware
{   
    console.log("this is middleware one")
    next()
}

const middle2 = function(req,res, next)// Here 2nd middleware 
{
    console.log("this is middleware two used globaly")
    next()
}

app.use(middle2) 


app.get('/',middle1,function(req,res){
    res.send("<h1>This is the main page with middleware 1 and middleware2 <h1>")
})
app.get('/two',middle1,function(req,res){
    res.send("<h1>This is the second page with middeware 1 and middleware 2 <h1>")
})
app.get('/three',function(req,res){
    res.send("<h1>This is the third page with middeware 2 <h1>")
})
app.get('/four',function(req,res){
    res.send("<h1>This is the fourth page with middeware 2 <h1>")
})
app.get('/five',function(req,res){
    res.send("<h1>This is the fivth page with middeware 2 <h1>")
})
app.listen(3500)

// What is middleware?
// Middleware are like any general functions which takes in three parameters as request, response and next function.
// These middleware are used to execute some function before the response is send back to the client. 
// It mostly gets used for the authentication, that before we send the response, we can authenticate if the API request is called from the client with proper user credentials or not.
// These middleware can be applied on the whole application level as well as on one particular API route.
// next() function is very important, after the end of each middleware we should execute next function so that the program execution can move either to next middleware or to main route, if this function is not added then execution will not move forward.

