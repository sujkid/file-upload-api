'use strict';

const fs = require('fs');

const AWS = require('aws-sdk');
const s3 = new AWS.S3();

// const mime = require('mime');
const path = require('path');
const crypto = require('crypto');

const s3Upload = function(file) {

  // console.log('file is ', file.originalname);
  let filesize = file.size/1024/1024/1024;
  if(filesize < 1) {
    console.log("filesize must be greater than 1GB");
    return;
  }

  let ext = path.extname(file.originalname);
  let extCase = ext.toLowerCase();

  console.log("ext is, ", extCase);

  if(ext !== ".png" && ext !== ".doc" && ext !== ".pdf") {
    console.log("Please upload a png, doc or pdf file");
    return;
  }

  let folder = new Date().toISOString().substring(0, 10);

  console.log('date is', folder);

  let stream = fs.createReadStream(file.path);
  let bucket = process.env.AWS_S3_BUCKET_NAME;

  // console.log('bucket is', bucket);
  return new Promise(function(res, rej) {
    crypto.randomBytes(16, (err, buf) => {
      if (err) {
        rej(err);
      } else {
        // console.log(buf);
        res(buf.toString('hex'));
      }
    });
  })
  .then(function(filename) {
    // console.log("filename is", filename);
    const params = {
      ACL: 'public-read',
      Bucket: bucket,
      Key: folder + '/' + filename + ext,
      // Key: `${folder}/${filename}${ext}`,
      Body: stream,
      ContentType: file.mimetype,
    };

    return new Promise(function(res, rej) {
      s3.upload(params, function(err, data) {
        if(err) {
          rej(err);
        } else {
          res(data);
        }
      });
    });
  });
};

module.exports = s3Upload;
