const chalk = require('chalk')
const fs = require('fs')

const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNote = notes.find((note) => note.title === title)
  // debugger
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    })
    saveNotes(notes)
    console.log(chalk.green.inverse('New note added'))
  } else {
    console.log(chalk.red.inverse('Note title taken!'))
  }
}

const readNote = (title) => {
  const notes = loadNotes()
  const currentNote = notes.find((note) => note.title === title)
  if (currentNote) {
    console.log(chalk.bold(title))
    console.log(currentNote.body)
  } else {
    console.log(chalk.red.inverse('Note not found'))
  }
}

const listNotes = () => {
  const notes = loadNotes()
  console.log(chalk.bold.blue('Your notes: '))
  notes.forEach((note) => console.log(note.title))
}

const removeNote = (title) => {
  const notes = loadNotes()
  const clearedNotes = notes.filter((note) => note.title !== title)
  if (notes.length > clearedNotes.length) {
    saveNotes(clearedNotes)
    console.log(chalk.green.inverse('note removed'))
  } else {
    console.log(chalk.red.inverse('Note not found!'))
  }
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJson = dataBuffer.toString()
    return JSON.parse(dataJson)
  } catch (e) {
    return []
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
}
