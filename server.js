const app = require('./index');
const mongoose = require('mongoose');

require('dotenv').config();

const DB_NAME = process.env.DB_NAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

const server = app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

mongoose
    .connect(
        `mongodb+srv://${DB_NAME}:${DB_PASSWORD}@cluster0.ksurkpy.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log("Conectado ao MongoDB!");
    })
    .catch((err) => {
        console.log(err);
    });

module.exports = server;
