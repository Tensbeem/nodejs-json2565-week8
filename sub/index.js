const http = require('http')

function reqListener(req,res){
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    res.write("Hello")
    res.end()
    console.log("Inside Server!")
}

const Server = http.createServer(reqListener)
Server.listen(5000)