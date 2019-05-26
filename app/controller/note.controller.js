const db = require('../config/db.config.js');
const Note = db.notes;

// Post a Note
exports.create = (req, res) => {
    // Save to MySQL database
    Note.create({
        subject: req.body.subject,
        body: req.body.body
    }).then(note => {
        // Send created note to client
        res.send(note);
    });
};