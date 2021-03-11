/* 

  RESOLVING => LOADING => WRAPPING => EVALUATION => CACHING

  I: 
    1.1 CORE Modules
    1.2 node_modules

  II:   './'
    2.1   file js | json
    2.2 directory
      2.2.1 package.json -> "main" -> sprecific_file_name
      2.2.2 index js | json
  III: 
    throw new Error()
*/
const t = require('./abra')
console.log(t)
t.test = 'test'

console.log(t)

