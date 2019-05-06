const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  importance: {
    type: String,
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

module.exports = mongoose.model('Task', taskSchema);