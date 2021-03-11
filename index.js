const http = require('http')
const fs = require('fs').promises

const users = []

const routerGET = {
  '/': async (req, res) => {
    const data = await fs.readFile('./views/index.html', { encoding: 'utf8' })
    return res.end(data)
  },
  '/contacts.html': async (req, res) => {
    const data = await fs.readFile('./views/contacts.html', {
      encoding: 'utf8'
    })
    return res.end(data)
  },
  '/about.html': async (req, res) => {
    const data = await fs.readFile('./views/about.html', { encoding: 'utf8' })
    return res.end(data)
  }
}

const routerPOST = {
  '/signup': async (req, res) => {
    let jsonString = ''
    req.on('data', chunk => {
      const strData = chunk.toString()
      jsonString += strData
    })

    req.on('end', () => {
      const user = JSON.parse(jsonString)
      user.id = Date.now()
      delete user.password
      users.push(user)

      console.log(users)
    })

    return res.end('user created')
  }
}

const requestListener = async (req, res) => {
  const { method, url } = req 

  if (method === 'GET') {
    return routerGET[url](req, res)
  }

  if (method === 'POST') {
    
    if (routerPOST[url]) {

      return routerPOST[url](req, res)
    }
  }

  res.end('404. not found page')
}

const server = http.createServer(requestListener) 

server.listen(3000) //start server
