require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('62e76b330b24db851027b0fc', { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
}) 