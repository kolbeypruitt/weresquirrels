var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/weresquirrels');
var colony = db.get('colonies');
var duel = db.get('duels');
var weresquirrelContract = db.get('weresquirrelContracts');
var unibearContract = db.get('unibearContract');
var weresquirrel = db.get('weresquirrels');
var unibear = db.get('unibears');
var wereStat = db.get('wereStats');
var Code = require('../lib/secretCode.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/colonies', function(req, res, next) {
  colony.find({}).then(function (colonies) {
    viewObj = {};
    viewObj['colonies'] = [];
    for (var i = 0; i < colonies.length; i++) {
      colonies[i]['wins'] = 0;
      viewObj.colonies.push(colonies[i])
    }
    console.log(viewObj);
    return viewObj;
  }).then(function (viewObj) {
    duel.find({}).then(function (duels) {
      var winners = [];
      for (var i = 0; i < duels.length; i++) {
        winners.push(duels[i].winner)
      }
      var count = {};
      for (var i = 0; i < winners.length; i++) {
        if (count[winners[i]] == undefined) {
          count[winners[i]] = 1;
        } else {
          count[winners[i]]++
        }
      }
      return count;
      })
  })
  .then(function (count) {
    res.render('colonies', {colonies: count})
    })
});

module.exports = router;
