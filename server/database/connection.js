//jshint esversion:6

const connection = {
    client: "sqlite3",
    connection: {
        filename: "./dev.sqlite3"
    },
    useNullAsDefault: true
}
module.exports = connection;