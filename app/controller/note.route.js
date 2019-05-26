module.exports = function (app) {

    const notes = require('../controller/note.controller.js');

    // Get all Notes
    app.get('/api/note', notes.getAll);
    // Create a new Note
    app.post('/api/note', notes.create);
}