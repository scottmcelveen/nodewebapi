module.exports = (sequelize, Sequelize) => {
    const Note = sequelize.define('note', {
        subject: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: true
            }
        },
        body: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: true
            }
        }
    });

    return Note;
}