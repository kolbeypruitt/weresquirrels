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
var code = new Code()
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/colonies', function(req, res, next) {
  code.getDuelWins()
  .then(function (viewObj) {
    res.render('colonies', {colonies: viewObj})
    })
});

router.get('/colonies/:id', function(req, res, next) {
  colony.findOne(req.params.id).then(function (col) {
    // colonies are here
   return weresquirrelContract.find({colonyId: col._id})
   .then(function (wereContracts) {
    var out = wereContracts;
    out['weresquirrels'] = [];
    out['stats'] = [];
    for (var i = 0; i < wereContracts.length; i++) {
      // here is array of weresquirrel contracts
      out.weresquirrels.push(weresquirrel.findOne({_id: wereContracts[i].weresquirrelId}));
      out.stats.push(wereStat.findOne({weresquirrelId: wereContracts[i].weresquirrelId }))
    }
    Promise.all(out.stats).then(function (results) {
      console.log(results);
      return results
      // here we have weresquirrels
    })
   })
   .then(function (argument) {
    // res.render('show', { colonyName: req.params.id });
   })
  })
});

module.exports = router;
