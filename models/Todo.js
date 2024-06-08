const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    complate: {
        type: Boolean,
        default: false
    },
}, { timestamps: true })

module.exports = mongoose.models.todo || mongoose.model("todo", todoSchema)