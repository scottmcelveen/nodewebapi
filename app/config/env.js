const env = {
    database: 'testdb',
    username: 'nodeuser',
    password: 'nodeuser@1234',
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

module.exports = env;
