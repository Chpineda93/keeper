//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const keeperAPI = require("./src/keeperAPI");
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.options("*", cors()); //enable cors for delete request function

app.get("/notes", function(req, res) {
    keeperAPI.getNotes(req.body, function(data) {
        res.send(data);
    })
});

app.post("/insertNotes", function(req, res) {
    keeperAPI.insertNote(req.body, function(data) {
        res.send(data);
        console.log(req.body);
    });
});

app.delete("/:id", cors(), function(req, res) {
    console.log(req.params.id)
    keeperAPI.deleteNote(req.params.id, function(statusCode) {
        res.status(statusCode >= 100 && statusCode < 600 ? err.code : 500);
    })
});


require('./database/routes')(app);
app.listen(3005, function(req, res) {
    console.log("sever has started on port 3005");
})