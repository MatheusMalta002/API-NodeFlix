const express = require('express')
const app = express()

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

app.listen(3000)