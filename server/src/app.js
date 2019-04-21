const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(morgan("combined"))

app.get('/status', (req, res) => {
    res.send({
        message: "Hello World"
    })
})

app.listen(3000)
