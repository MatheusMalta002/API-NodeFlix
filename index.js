const express = require('express')
const app = express()
const mongoose = require('mongoose')

require('dotenv').config()

const DB_NAME = process.env.DB_NAME
const DB_PASSWORD = process.env.DB_PASSWORD

//Forma de ler json
app.use(
    express.urlencoded({
        extended:true,
    })
)

app.use(express.json())

// rota inicial / endpoint
app.get('/', (req, res) => {
  res.json({message: 'Acesso bem sucedido'})
})

mongoose
    .connect(
        `mongodb+srv://${DB_NAME}:${DB_PASSWORD}@cluster0.ksurkpy.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(
        ()=>{ 
            console.log("Conectado ao MongoDB")
            app.listen(3000)}
    )
    .catch(
        (err) => {console.log(err)}
    )
