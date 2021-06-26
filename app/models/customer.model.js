const mongoose = require('mongoose')

const CustomerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  address: String,
  age: {
    type: Number,
    min: 18,
    max: 65,
    required: true
  },
  copyrightBy: {
    type: String,
    default: 'hompimpro'
  }
})

module.exports = mongoose.model('customers', CustomerSchema)