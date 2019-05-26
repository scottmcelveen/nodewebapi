const db = require('../config/db.config.js');
const Note = db.notes;

// Get all Notes
exports.getAll = (req, res) => {
    Note
        .findAll()
        .then(notes => {
            // Send notes to client
            res.send(notes);
        });
};

// Post a Note
exports.create = (req, res) => {
    // Save to MySQL database
    Note.create({
        subject: req.body.subject,
        body: req.body.body
    }).then(note => {
        // Send created note to client
        res.send(note);
    }).catch(error => {
        console.log('the instance was invalid!');
        res.sendStatus(400);
    });

};