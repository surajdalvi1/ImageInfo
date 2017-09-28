var express = require('express');
var router = express.Router();
var probe = require('probe-image-size');






/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/getImageInfo', function(req, res, next) {
  var imageurl=req.body.url;

  probe(imageurl, function (error, result) {
    if(error){
      res.status(500).json({ error: 'message' });
    }else{
      res.send(result)
    }


  });


});

module.exports = router;
