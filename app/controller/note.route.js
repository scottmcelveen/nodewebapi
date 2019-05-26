module.exports = function (app) {

    const notes = require('../controller/note.controller.js');

    // Create a new Note
    app.post('/api/note', notes.create);
}