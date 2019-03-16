const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const thingSchema = new Schema({
  title: String,
  description: String,
  img: {data: Buffer, contentType: String},
  emotional_value: {
    low: false,
    medium: false,
    high: false
  },
  check: false,
  created_at: { type: Date, default: Date.now }
})

let Thing = mongoose.model('Task', thingSchema);

module.exports = {
  Thing
}