var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('index', { title: "Mini Messageboard", messages: messages })
});

router.post('/new', function(req, res,next){
  const newContent = {
    text:req.body.text ?? '...',
    user:req.body.user ?? 'unknown user',
    added: new Date()
  }
  messages.push(newContent)
  res.render('index', { title: "Mini Messageboard", messages: messages })
})

module.exports = router;
