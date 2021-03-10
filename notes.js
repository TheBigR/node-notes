const fs = require('fs')

const getNotes = () => {
  return 'Your Notes...'
}

const addNote = (title, body) => {
  const notes = loadNotes()
  notes.push({
    title: title,
    body: body,
  })
  saveNotes(notes)
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
  getNotes: getNotes,
  addNote: addNote,
}
