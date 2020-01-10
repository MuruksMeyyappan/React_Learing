const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  email: {
    type: String,
    required: true,
    max: 255,
    min: 6
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 12
  },
  date: {
    type: Date,
    default: Date.now
  },
  age: {
    type: Number,
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  currentAddress: {
    type: String,
    required: true,
    max: 255,
    min: 6
  },
  permanentAddress: {
    type: String,
    required: true,
    max: 255,
    min: 6
  }
});

module.exports = mongoose.model("User", userSchema);
