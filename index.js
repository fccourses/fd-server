const http = require('http')

let reqCount = 0

const requestListener = (req, res) => {
  console.log(++reqCount)
  
  res.end(
    `HELLO WORLD SERVER NODE.JS 14.16.0 Your req number is ${reqCount}`
  )
}

const server = http.createServer(requestListener)

server.listen(30000)
