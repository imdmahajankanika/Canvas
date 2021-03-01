const port = process.env.PORT||8000;
const express = require('express');
const app =express();
const bodyParser= require('body-parser')
const jsonParser= bodyParser.json()
app.use('/canvas',express.static("Drawing"))
app.get('/', function(req,res){
    res.send("Main Page!")
})
app.get('/hello', function(req,res){
    res.send("Hello World!")
})
app.post('/get', jsonParser, function (req, res) {
    const body = req.body;
    console.log(body);
});
app.listen(port,function(){
    console.log("Server is listening at default port! "+port)
})
