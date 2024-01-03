const mongoose = require('mongoose')

const logsSchema = new mongoose.Schema({
    title: { type: String, require: true },
    entry: { type: String, require: true },
    shipIsBroken: Boolean
})

const CaptainsLog = mongoose.model('Log', logsSchema)

module.exports = CaptainsLog