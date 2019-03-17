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
  img: {
    type: Buffer,
    required: false
  },
  check: {
    type: Boolean,
    required: true
  },
  created_at: {
    type: Date, 
    default: Date.now}
})

module.exports = mongoose.model('Task', taskSchema);