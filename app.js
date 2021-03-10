const yargs = require('yargs')
const notes = require('./notes')

yargs.version('1.0.1')

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body)
  },
})

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: () => {
    console.log('Removing a note')
  },
})

yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: () => {
    console.log('Reading a note')
  },
})

yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler: () => {
    console.log('List all notes')
  },
})

yargs.parse()
