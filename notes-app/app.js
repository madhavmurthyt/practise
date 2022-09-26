const chalk = require('chalk')
const yargs = require('yargs')

const notes = require('./notes.js');

// console.log(getMyNotes());

// // console.log(validator.isURL('https/mead.io'))

// console.log(chalk.red.bold.inverse('Error!'))

yargs.command({
    command: 'add',
    describle: 'Add a note',
    builder: {
        title : {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },

        body: {
            describe: 'Note Description',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        // console.log('Title: '+ argv.title)
        // console.log('Body: '+argv.body)
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describle: 'Remove a note',
    builder: {
        title : {
            describe: 'Input a title to remove!',
            demandOption: true,
            type: 'string'
        }
    },

    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describle: 'list notes',
   
    handler() {
       notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describle: 'Read a note',
    builder: {
        title : {
            describe: 'Input a title to read!',
            demandOption: true,
            type: 'string'
        }
    },

    handler(argv) {
       notes.readNotes(argv.title)
    }
})

yargs.parse()

