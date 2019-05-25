const mongoose = require("mongoose")
const Schema = mongoose.Schema

const taskSchema = new Schema({
  title: {
    type: String,
    required: true 
  },
  description: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    required: true
  },
  importance: {
    type: Number,
    required: true
  },
  check: {
    type: Boolean,
    required: true
  },
  created_at: {
    type: Date, 
    default: Date.now
  }
})

module.exports = mongoose.model('Task', taskSchema)