var db = require('monk')('localhost/weresquirrels');
var colony = db.get('colonies');
var duel = db.get('duels');
var weresquirrelContract = db.get('weresquirrelContracts');
var unibearContract = db.get('unibearContract');
var weresquirrel = db.get('weresquirrels');
var unibear = db.get('unibears');
var wereStat = db.get('wereStats');


function Code() {
  
}

Code.prototype.getDuelWins = function() {
  return colony.find({}).then(function (colonies) {
    viewObj = [];
    for (var i = 0; i < colonies.length; i++) {
      colonies[i]['wins'] = 0;
      viewObj.push(colonies[i])
    }
    return viewObj;
  }).then(function (viewObj) {
    return duel.find({}).then(function (duels) {
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
      for (var i = 0; i < viewObj.length; i++) {
        viewObj[i].wins = count[Object.keys(count)[i]];
      }
      return viewObj;
      })
  })
};

module.exports = Code;

