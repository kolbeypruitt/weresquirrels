var db = require('monk')('localhost/weresquirrels')
var colony = db.get('colonies')
var duel = db.get('duels')
var weresquirrelContract = db.get('weresquirrelContracts')
var unibearContract = db.get('unibearContract')
var weresquirrel = db.get('weresquirrels')
var unibear = db.get('unibears')
var wereStat = db.get('wereStats')
// unibears
var frederickId = unibear.id(),
    thomasId = unibear.id(),
    winnieId = unibear.id(),
    athenaId = unibear.id(),
    augustusId = unibear.id(),
    nicId = unibear.id(),
    sirJorahId = unibear.id(),
    theHoundId = unibear.id()
// weresquirrels
var rasputinId = weresquirrel.id(),
    arendId = weresquirrel.id(),
    marinusId = weresquirrel.id(),
    hugoLambId = weresquirrel.id(),
    agataId = weresquirrel.id(),
    anastazieId = weresquirrel.id(),
    hedvikaId = weresquirrel.id(),
    momoId = weresquirrel.id()
// colonies
var nausicaaId = colony.id(),
    alagaesiaId = colony.id(),
    kakarikoId = colony.id(),
    oldValyriaId = colony.id()
// weresquirrelContract
var weresquirrelContract1 = weresquirrelContract.id(),
    weresquirrelContract2 = weresquirrelContract.id(),
    weresquirrelContract3 = weresquirrelContract.id(),
    weresquirrelContract4 = weresquirrelContract.id(),
    weresquirrelContract5 = weresquirrelContract.id(),
    weresquirrelContract6 = weresquirrelContract.id(),
    weresquirrelContract7 = weresquirrelContract.id(),
    weresquirrelContract8 = weresquirrelContract.id()
// unibearContract
var unibearContract1 = unibearContract.id(),
    unibearContract2 = unibearContract.id(),
    unibearContract3 = unibearContract.id(),
    unibearContract4 = unibearContract.id(),
    unibearContract5 = unibearContract.id(),
    unibearContract6 = unibearContract.id(),
    unibearContract7 = unibearContract.id(),
    unibearContract8 = unibearContract.id() 
// duels
var duelId1 = duel.id(),
    duelId2 = duel.id(),
    duelId3 = duel.id(),
    duelId4 = duel.id(),
    duelId5 = duel.id(),
    duelId6 = duel.id()
// stats
var wereStat1 = wereStat.id(),
    wereStat2 = wereStat.id(),
    wereStat3 = wereStat.id(),
    wereStat4 = wereStat.id(),
    wereStat5 = wereStat.id(),
    wereStat6 = wereStat.id(),
    wereStat7 = wereStat.id(),
    wereStat8 = wereStat.id(),
    wereStat9 = wereStat.id(),
    wereStat10 = wereStat.id(),
    wereStat11 = wereStat.id(),
    wereStat12 = wereStat.id(),
    wereStat13 = wereStat.id(),
    wereStat14 = wereStat.id(),
    wereStat15 = wereStat.id(),
    wereStat16 = wereStat.id(),
    wereStat17 = wereStat.id(),
    wereStat18 = wereStat.id(),
    wereStat19 = wereStat.id(),
    wereStat20 = wereStat.id(),
    wereStat21 = wereStat.id(),
    wereStat22 = wereStat.id(),
    wereStat23 = wereStat.id(),
    wereStat24 = wereStat.id(),
    wereStat25 = wereStat.id(),
    wereStat26 = wereStat.id(),
    wereStat27 = wereStat.id(),
    wereStat28 = wereStat.id()
// stuff
Promise.all([
  colony.remove().then(function() {
    return Promise.all([
      colony.insert({_id: nausicaaId, name: "Nausicaa"}),
      colony.insert({_id: alagaesiaId, name: "Alagaesia"}),
      colony.insert({_id: kakarikoId, name: "Kakariko"}),
      colony.insert({_id: oldValyriaId, name:"OldValyria"})
    ])
  }),
  unibear.remove().then(function() {
    return Promise.all([
      unibear.insert({_id: frederickId, name: "Frederick"}),
      unibear.insert({_id: thomasId, name: "Thomas"}),
      unibear.insert({_id: winnieId, name: "Winnie"}),
      unibear.insert({_id: athenaId, name: "Athena"}),
      unibear.insert({_id: augustusId, name: "Augustus"}),
      unibear.insert({_id: nicId, name: "Nic"}),
      unibear.insert({_id: theHoundId, name: "The Hound"}),
      unibear.insert({_id: sirJorahId, name: "Sir Jorah"})
    ])
  }),
  unibearContract.remove().then(function() {
    return Promise.all([
      unibearContract.insert({
        _id: unibearContract1,
        unibearId: frederickId,
        colonyId: nausicaaId,
        honey: 20,
        time: 12
        }),
      unibearContract.insert({
        _id: unibearContract2,
        unibearId: thomasId,
        colonyId: nausicaaId,
        honey: 16,
        time: 10
        }),
      unibearContract.insert({
        _id: unibearContract3,
        unibearId: winnieId,
        colonyId: alagaesiaId,
        honey: 18,
        time: 11
        }),
      unibearContract.insert({
        _id: unibearContract4,
        unibearId: athenaId,
        colonyId: alagaesiaId,
        honey: 24,
        time: 16
        }),
      unibearContract.insert({
        _id: unibearContract5,
        unibearId: augustusId,
        colonyId: kakarikoId,
        honey: 28,
        time: 11
        }),
      unibearContract.insert({
        _id: unibearContract6,
        unibearId: nicId,
        colonyId: kakarikoId,
        honey: 11,
        time: 8
        }),
      unibearContract.insert({
        _id: unibearContract7,
        unibearId: theHoundId,
        colonyId: oldValyriaId,
        honey: 34,
        time: 15
        }),
      unibearContract.insert({
        _id: unibearContract8,
        unibearId: sirJorahId,
        colonyId: oldValyriaId,
        honey: 24,
        time: 7
        })
    ])
  }),
  weresquirrel.remove().then(function() {
    return Promise.all([
      weresquirrel.insert({_id: rasputinId, name: "Rasputin"}),
      weresquirrel.insert({_id: arendId, name: "Arend"}),
      weresquirrel.insert({_id: marinusId, name: "Marinus"}),
      weresquirrel.insert({_id: hugoLambId, name: "HugoLamb"}),
      weresquirrel.insert({_id: agataId, name: "Agata"}),
      weresquirrel.insert({_id: anastazieId, name: "Anastazie"}),
      weresquirrel.insert({_id: hedvikaId, name: "Hedvika"}),
      weresquirrel.insert({_id: momoId, name: "Momo"})
    ])
  }),
  weresquirrelContract.remove().then(function() {
    return Promise.all([
      weresquirrelContract.insert({
        _id: weresquirrelContract1,
        weresquirrelId: rasputinId,
        colonyId: nausicaaId,
        peanuts: 4,
        time: 15
      }),
      weresquirrelContract.insert({
        _id: weresquirrelContract2,
        weresquirrelId: arendId,
        colonyId: nausicaaId,
        peanuts: 6,
        time: 12
      }),
      weresquirrelContract.insert({
        _id: weresquirrelContract3,
        weresquirrelId: marinusId,
        colonyId: alagaesiaId,
        peanuts: 7,
        time: 5
      }),
      weresquirrelContract.insert({
        _id: weresquirrelContract4,
        weresquirrelId: hugoLambId,
        colonyId: alagaesiaId,
        peanuts: 9,
        time: 9
      }),
      weresquirrelContract.insert({
        _id: weresquirrelContract5,
        weresquirrelId: agataId,
        colonyId: kakarikoId,
        peanuts: 4,
        time: 15
      }),
      weresquirrelContract.insert({
        _id: weresquirrelContract6,
        weresquirrelId: anastazieId,
        colonyId: kakarikoId,
        peanuts: 12,
        time: 3
      }),
      weresquirrelContract.insert({
        _id: weresquirrelContract7,
        weresquirrelId: hedvikaId,
        colonyId: oldValyriaId,
        peanuts: 8,
        time: 10
      }),
      weresquirrelContract.insert({
        _id: weresquirrelContract8,
        weresquirrelId: momoId,
        colonyId: oldValyriaId,
        peanuts: 9,
        time: 14
      })
    ])
  }),
  
  duel.remove().then(function() {
    return Promise.all([
      duel.insert({_id: duelId1, colonyIds: [nausicaaId, alagaesiaId], winner: nausicaaId}),
      duel.insert({_id: duelId2, colonyIds: [nausicaaId, kakarikoId], winner: nausicaaId}),
      duel.insert({_id: duelId3, colonyIds: [nausicaaId, oldValyriaId], winner: oldValyriaId}),
      duel.insert({_id: duelId4, colonyIds: [alagaesiaId, kakarikoId], winner: kakarikoId}),
      duel.insert({_id: duelId5, colonyIds: [alagaesiaId, oldValyriaId], winner: alagaesiaId}),
      duel.insert({_id: duelId6, colonyIds: [oldValyriaId, kakarikoId], winner: oldValyriaId})
    ])
  }),
  wereStat.remove().then(function() {
    return Promise.all([
      wereStat.insert({_id: wereStat1, duelId: duelId1, weresquirrelId: rasputinId, garlic: 4, meat: 8}),
      wereStat.insert({_id: wereStat7, duelId: duelId1, weresquirrelId: arendId, garlic: 6, meat: 8}),
      wereStat.insert({_id: wereStat8, duelId: duelId1, weresquirrelId: marinusId, garlic: 2, meat: 7}),
      wereStat.insert({_id: wereStat9, duelId: duelId1, weresquirrelId: hugoLambId, garlic: 4, meat: 8}),
      wereStat.insert({_id: wereStat2, duelId: duelId2, weresquirrelId: agataId, garlic: 6, meat: 7}),
      wereStat.insert({_id: wereStat10, duelId: duelId2, weresquirrelId: anastazieId, garlic: 5, meat: 10}),
      wereStat.insert({_id: wereStat11, duelId: duelId2, weresquirrelId: rasputinId, garlic: 7, meat: 10}),
      wereStat.insert({_id: wereStat12, duelId: duelId2, weresquirrelId: arendId, garlic: 6, meat: 10}),
      wereStat.insert({_id: wereStat13, duelId: duelId3, weresquirrelId: arendId, garlic: 5, meat: 5}),
      wereStat.insert({_id: wereStat14, duelId: duelId3, weresquirrelId: rasputinId, garlic: 10, meat: 3}),
      wereStat.insert({_id: wereStat15, duelId: duelId3, weresquirrelId: hedvikaId, garlic: 12, meat: 5}),
      wereStat.insert({_id: wereStat16, duelId: duelId3, weresquirrelId: momoId, garlic: 13, meat: 6}),
      wereStat.insert({_id: wereStat17, duelId: duelId4, weresquirrelId: marinusId, garlic: 8, meat: 11}),
      wereStat.insert({_id: wereStat18, duelId: duelId4, weresquirrelId: hugoLambId, garlic: 9, meat: 12}),
      wereStat.insert({_id: wereStat19, duelId: duelId4, weresquirrelId: agataId, garlic: 11, meat: 12}),
      wereStat.insert({_id: wereStat20, duelId: duelId4, weresquirrelId: anastazieId, garlic: 11, meat: 12}),
      wereStat.insert({_id: wereStat21, duelId: duelId5, weresquirrelId: hedvikaId, garlic: 9, meat: 7}),
      wereStat.insert({_id: wereStat22, duelId: duelId5, weresquirrelId: momoId, garlic: 10, meat: 8}),
      wereStat.insert({_id: wereStat23, duelId: duelId5, weresquirrelId: marinusId, garlic: 15, meat: 8}),
      wereStat.insert({_id: wereStat24, duelId: duelId5, weresquirrelId: hugoLambId, garlic: 12, meat: 9}),
      wereStat.insert({_id: wereStat25, duelId: duelId6, weresquirrelId: hedvikaId, garlic: 7, meat: 11}),
      wereStat.insert({_id: wereStat26, duelId: duelId6, weresquirrelId: momoId, garlic: 6, meat: 12}),
      wereStat.insert({_id: wereStat27, duelId: duelId6, weresquirrelId: agataId, garlic: 10, meat: 9}),
      wereStat.insert({_id: wereStat28, duelId: duelId6, weresquirrelId: anastazieId, garlic: 8, meat: 9})
    ])
  })
]).then(function () {
  console.log('your database has been cleared and seeded!');
})