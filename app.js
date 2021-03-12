const express = require('express')
const validateBody = require('./middleware/validate.mw')
const {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
  getUser
} = require('./controller/user.controller')

const app = express() // Создание сервера express

const bodyParser = express.json() // function

/* ROUTING: METHOD, PATH */
app.get('/users', getAllUsers)
app.get('/user/:id', getUser)
app.post('/user', bodyParser, validateBody, createUser)
app.patch('/user/:id', bodyParser, validateBody, updateUser)
app.delete('/user/:id', deleteUser)

// Запустили сервер
app.listen(3000, () => {
  console.log('Server started')
})
