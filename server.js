require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine')
const methodOverride = require('method-override')
// const bodyParser = require('body-parser')
const CaptainsLog = require('./models/log')
const PORT = process.env.PORT || 3001

const app = express();

app.use(express.urlencoded({ extended: true }))
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
    console.log('connected to mongodb')
})

// New Route --- show the user a form to fill out to create a fruit (connects to the CREATE route)
app.get('/logs/new', (req, res) => {
    res.render('logs/New')
})

//Create Route --- Backend only fucntionality* --> used to create a log (connects to the NEW route)
app.post('/logs', async (req, res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    try {
        const createdLog = await CaptainsLog.create(req.body)
        res.redirect(`/logs/${createdLog._id}`)
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

// INDEX - A TABLE OF CONTENTS OF ALL RESOURCES ( SHOW ALL FRUITS )
app.get('/logs', async (req, res) => {
    try {
        const foundLogs = await CaptainsLog.find({})
        res.render('logs/Index', {
            logs: foundLogs
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

// SHOW - Shows you 1 individual fruit
app.get('/logs/:id', async (req, res) => {
    try {
        const foundLog = await CaptainsLog.findOne({_id: req.params.id})
        res.render('logs/Show', {
            log: foundLog
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

// DELETE - Backend only funcitonality* --> used to delete a fruit
app.delete('/logs/:id', async (req, res) => {
    try {
        await CaptainsLog.findOneAndDelete({'_id': req.params.id})
            .then(() => {
                res.redirect('/logs')
            })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

// EDIT - Shows a form that lets you edit the fruit (connects to the UPDATE or DELETE route)

// UPDATE - Backend only functionality* --> used to update a fruit


app.listen(PORT, () => {
    console.log(`The Port at ${PORT} is open`)
})