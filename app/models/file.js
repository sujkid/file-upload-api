'use strict';

const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const File = mongoose.model('File', fileSchema);

module.exports = File;
