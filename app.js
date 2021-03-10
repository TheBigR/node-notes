const yargs = require('yargs')

yargs.version('1.0.1')

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
    },
  },
  handler: (argv) => {
    console.log('Adding a new note', argv)
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

console.log(yargs.argv)
