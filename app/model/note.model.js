module.exports = (sequelize, Sequelize) => {
    const Note = sequelize.define('note', {
        subject: {
            type: Sequelize.STRING
        },
        body: {
            type: Sequelize.STRING
        }
    });

    return Note;
}