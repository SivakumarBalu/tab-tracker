const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(morgan("combined"))

app.post('/register', (req, res) => {
    res.send({
        message: `Hello ${req.body.email}! is registered`
    })
})

app.listen(3000)
