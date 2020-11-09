const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A project must have a name']
  },
  link: {
    type: String,
    required: [true, 'A project must have a url']
  },
  language: {
    type: String,
    required: [true, 'A project must have a language']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
