'use strict';

const controller = require('lib/wiring/controller');
const s3Upload = require('../../lib/aws-s3-upload');
const models = require('app/models');
const File = models.file;

const multer = require('multer');
const multerUpload = multer({ dest: '/tmp/'});

const create = (req, res, next) => {
  console.log('req.file is ', req.file);
  console.log('req.body is ', req.body);
  console.log('res.body is ', res.body);
  // console.log('req is ', req);
  s3Upload(req.file)
    .then(function(s3response) {
      return File.create({
        url: s3response.Location,
        title: req.body.image.title
      });
    })
    .then(function(upload){

      res.json({
        body: upload,
      });
    })
    .catch(function(err){
      next(err);
    });
};

module.exports = controller({
  create,
}, { before: [
  { method: multerUpload.single('image[file]'), only: ['create'] },
], });
