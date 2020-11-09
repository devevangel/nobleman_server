const mongoose = require('mongoose');

const techStackModel = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'TechStack name is required'],
    unique: [true, 'TechStack name must be unique']
  },
  percentage: {
    type: String,
    required: [true, 'TechStack percentage is required'],
    enum: ['100', '90', '80', '70', '60', '50']
  },
  lastWeek: {
    type: Number,
    required: [true, 'TechStack last week percentage is required']
  },
  lastMonth: {
    type: Number,
    required: [true, 'TechStack last month percentage is required']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const TechStack = mongoose.model('TechStack', techStackModel);
module.exports = TechStack;
