const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: [true, 'A job title is required']
  },
  company: {
    type: String,
    required: [true, 'A company name is required']
  },
  summary: {
    type: String,
    required: [true, 'A job summary is required']
  },
  startDate: {
    type: String,
    required: [true, 'A start date is required']
  },
  finishDate: {
    type: String,
    required: [true, 'A finish date is required']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Experience = mongoose.model('Experience', experienceSchema);
module.exports = Experience;
