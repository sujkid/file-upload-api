'use strict';

require('dotenv').load();

const s3Upload = require('../lib/aws-s3-upload');
const mongoose = require('../app/middleware/mongoose');
const Upload = require('../app/models/upload');

let file = {
  path: process.argv[2],
  originalname: process.argv[2],
  title: process.argv[3]
};

s3Upload(file)
  .then(function(response) {
    console.log(response);
    console.log(response.Location);
    return Upload.create({
      url: response.Location,
      title: file.title
    });
  })
  .then(function(upload) {
    console.log(upload);
  })
  .catch(console.error())
  .then(function() {
    mongoose.connection.close();
  });
