var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) 
{
  res.send('respond with a resource');
});
router.post('/', function(req, res, next) 
{
	var personInfo = req.body;
	var mongoose = req.mongoose;
	var personSchema = mongoose.Schema({
	   name: String,
	   email: String,
	   password: String
	});
	var Person = mongoose.model("Person", personSchema);
	var newPerson = new Person({
         name: personInfo.name,
         email: personInfo.email,
         password: personInfo.password
      });
		
      newPerson.save(function(err, Person)
      {
         if(err)
            res.send(err);
         else
            res.send({message: "New person added", type: "success", person: personInfo});
      });
});
module.exports = router;
