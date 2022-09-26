require('../src/db/mongoose')
const Task = require('../src/models/tasks')

Task.findByIdAndDelete('62df8598c0e28a82372c0124').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log('No of incomplete tasks: '+result)
}).catch((e) => {
    console.log(e)
}) 