var express = require('express')
var app = express()





app.listen(3000,(err)=>{
    assert.equal(err,null,'connection to server failed')
    console.log('server is runnin at _PORT 3000')
})