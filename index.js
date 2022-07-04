const http = require('http') // 1.Import http module
const hostname = 'localhost'

const {loadUser} = require("./user_model")

const port = process.env.PORT || 3000 // 2.setting up port

const server = http.createServer((req,res)=>{ //3.Creating http server
    // res.statusCode = 200
    // res.setHeader('Content-Type','text/plain')
    // res.write("Hello World!")
    const jsonContent = JSON.stringify(loadUser())
    res.end(jsonContent)
    
})

server.listen(port,()=>{ // 4.Listening to http server
    console.log('Server running at http://${hostname}:${port}')
})