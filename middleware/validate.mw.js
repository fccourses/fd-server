const yup = require('yup')

const validationSchema = yup.object({
  name: yup.string().required(),
  email: yup
    .string()
    .email()
    .required(),
  password: yup.string().required(),
  gender: yup.string().required(),
  age: yup.string().required()
})

module.exports = async (req, res, next) => {
  try {
    req.body = await validationSchema.validate(req.body)
    next()
  } catch (error) {
    res.status(400).send(error.message)
  }
}
