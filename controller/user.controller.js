const { User } = require('../models')

module.exports.createUser = async (req, res, next) => {
  try {
    const { body } = req

    const newUser = await new User(body)

    res.status(201).send(newUser)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

module.exports.getUser = async (req, res, next) => {
  try {
    const { params } = req
    const user = await User.findOne(params.id)
    if (user) {
      return res.send(user)
    }
    throw new Error('User not found')
  } catch (error) {
    res.status(404).send(error.message) // NOT CORRECT
  }
}

module.exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll()
    res.status(200).send(users)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

module.exports.updateUser = async (req, res, next) => {
  try {
    const { params, body } = req

    const foundUser = await User.findOne(params.id)
    const updatedUser = await foundUser.update(body)
    const responseUser = JSON.stringify(updatedUser)

    res.status(202).end(responseUser)
  } catch (error) {
    res.status(400).send(error.message)
  }
}
module.exports.deleteUser = async (req, res, next) => {
  try {
    const { params } = req

    const foundUser = await User.findOne(params.id)
    const verdict = await foundUser.delete()

    res.status(200).send({ verdict })
  } catch (error) {
    res.status(400).send(error.message)
  }
}
