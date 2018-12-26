const express = require("express") ;
const app = express() ;

app.get("/", function(req, res){
    res.send("HELLO WORLD")
})

app.listen(3000, function(){
    console.log("sever started on port 3000")
})