require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine')
const CaptainsLog = require('./models/log')
const PORT = process.env.PORT || 3001

const app = express();

app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine)

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
    console.log('connected to mongodb')
})

//Index


// New Route
app.get('/logs/new', (req, res) => {
    res.render('log/New')
})

app.listen(PORT, () => {
    console.log(`The Port at ${PORT} is open`)
})
