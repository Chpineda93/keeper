const db = require("../database/makeConnection");

const KEEPER_TABLE = "keeperDB";

//insert on note
function insertNote(data, callback) {
    console.log(data)
    db(KEEPER_TABLE).insert(data).then((keeperDB) => {
        callback(keeperDB);
    })
}
//delete one note
function deleteNote(id, callback) {
    db(KEEPER_TABLE).del().where({ "id": id }).then(function(keeperDB) {
        callback(keeperDB);
    });
}

//get all notes
function getNotes(data, callback) {
    db(KEEPER_TABLE).select('*').then(function(keeperDB) {
        callback(keeperDB);
    })
}

module.exports = {
    insertNote: insertNote,
    deleteNote: deleteNote,
    getNotes: getNotes
}