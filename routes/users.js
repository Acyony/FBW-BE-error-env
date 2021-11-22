var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  const body = req.body;
  //console.log(body.hasOwnProperty("username"));
  if (body.hasOwnProperty('username')) {
    res.send(body);
  } else {
    const err = new Error('Request has no username');
    //err.status = 500;
    next(err)
  }

});

// LOGIN
router.get('/login', (req, res, next) => {
  console.log(process.env.USERNAME, process.env.PASSWORD);
  console.log(req.body);
  if (req.body.username == process.env.USERNAME && req.body.password == process.env.PASSWORD) {
    res.send('You logged in successfully.')
  } else {
    const err = new Error('Username or password are not matched');
    next(err);
  }
})



module.exports = router;
