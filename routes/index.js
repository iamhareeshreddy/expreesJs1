var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) 
{
	postData = req.body;
  	if(!postData.email || !postData.password)
  	{
  		res.send({error: 'Invalid user name or password'});
  		res.status(403);
  	}
  	else
  	{
  		res.send(postData.email);
  	}
});

module.exports = router;
