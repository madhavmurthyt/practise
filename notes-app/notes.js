
const fs = require("fs")
const chalk = require('chalk')

const readNotes = (title) => {
    const notes = loadNotes()
    const note = notes.find((notes) => notes.title === title)
       
    if(note) {
            console.log(chalk.green.inverse(note.title))
            console.log(note.body)
        } else {
            console.log(chalk.red.inverse('No note found'))
        }
     
}

const listNotes = () => {
    console.log(chalk.inverse('Your notes....'))
    const notes = loadNotes()
    notes.forEach((notes) => console.log(notes.title))
}

const removeNote = (title) => {
    const notes = loadNotes()

    const nonDuplicateNotes = notes.filter((notes) => notes.title !== title)

    if((notes.length > nonDuplicateNotes.length)) {
       saveNotes(nonDuplicateNotes)
       console.log(chalk.green.inverse('Note Removed!'))
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }

}

const addNote =  (title, body) => {
    const notes = loadNotes()

    // const duplicateNotes = notes.filter(function(notes) {
    //     return notes.title === title
    // })

    const duplicateNotes = notes.filter((notes) => notes.title === title)
    const duplicateNote = notes.find((notes) => notes.title === title)
   
    debugger

    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
 
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
}

module.exports = {
    listNotes: listNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNotes: readNotes
}
