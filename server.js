require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const CaptainsLog = require('./models/log')
const PORT = process.env.PORT || 3001

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.urlencoded({ extended: false }))
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
    res.send('Received"')
})
//     if (req.body.shipIsBroken === 'on') {
//         req.body.shipIsBroken = true
//     } else {
//         req.body.shipIsBroken = false
//     }
//     try {
//         await CaptainsLog.findOneAndUpdate({':_id': req.params.id})
//     } catch (error) {
        
//     }
// })

// INDEX - A TABLE OF CONTENTS OF ALL RESOURCES ( SHOW ALL FRUITS )
app.get('/logs', async (req, res) => {
    res.send('index')
})
// SHOW - Shows you 1 individual fruit

// DELETE - Backend only funcitonality* --> used to delete a fruit

// EDIT - Shows a form that lets you edit the fruit (connects to the UPDATE or DELETE route)

// UPDATE - Backend only functionality* --> used to update a fruit

app.listen(PORT, () => {
    console.log(`The Port at ${PORT} is open`)
})