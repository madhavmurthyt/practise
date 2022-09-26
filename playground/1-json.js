const fs = require('fs')
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBufer = fs.readFileSync('1-json.json')
// const dataJSON = dataBufer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const fileData = fs.readFileSync('1-json.json')
const dataJSON = fileData.toString()
const data = JSON.parse(dataJSON)
data.name = "Sudhama"
data.age = 38
const finalJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json',finalJSON)



