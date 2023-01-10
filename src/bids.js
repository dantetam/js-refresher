var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");

  const bidAmount = req.body.bidAmount; //Would implement login system and diff schema if I had more time
  const bidJobId = req.body.bidJobId;

  console.log(req.body);
  console.log(requirements);
  console.log("--------------------");

  const { MongoClient, ServerApiVersion } = require('mongodb');
  const uri = "mongodb+srv://admin:eWgXA5XUiwBZGZtr@cluster0.dz0lp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  client.connect(err => {
    const collection = client.db("test").collection("jobs");

    // perform actions on the collection object
    new Promise(function(resolve, reject) {

      //db.collection.find(WHERE ID = ...)
      //Update the entry in database, lowest bid in front

    }).then(function(result) { // (**)
      client.close();
    });

  });

  res.send("This is the job creation API, success");
});

module.exports = router;
