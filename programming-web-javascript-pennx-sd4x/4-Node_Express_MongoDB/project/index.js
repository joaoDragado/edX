var express = require('express');
var app = express();

var Animal = require('./Animal.js');
var Toy = require('./Toy.js');

/*
app.use('/', (req, res) => {
	res.json({ msg : 'It works!' });
    });
*/

/*
/findToy
params :  id: >the ID of the Toy to find
This API finds and returns the Toy in the “toys” collection with the ID that matches the id> parameter. It should return the entire Toy document/object, including all properties that are stored in the database.
If the id> parameter is unspecified, or if there is no Toy that has a matching ID, this API should return an empty object.
ex. /findToy?id=1234
*/
app.use('/findToy', (req, res) => {
  var toyID = req.query.id;
  if (toyID) {
    Toy.findOne( {id: toyID}, (err, toy) => {
      if (err) {
        res.type('html').status(500);
        res.send('Error: ' + err);
      }
      else if (toy) {
        res.json(toy);
      }
      else { // no toy found
        res.json({});
      }
    });
  }
  else { // no id specified
    res.json({});
  }
});


/*
This API finds all Animals in the “animals” collection that have a species and gender that match the species> and gender> parameters, respectively, and for which one of the Animal’s traits matches the trait> parameter. All matches should be complete matches, not partial matches using regular expressions, for instance.
e.g. /findAnimals?species=Dog&trait=loyal&gender=female
*/
app.use('/findAnimals', (req, res) => {
  var query = {};
  if (req.query.species) {
    query.species = req.query.species
  }
  if (req.query.gender) {
    query.gender = req.query.gender
  }
  if (req.query.trait) {
    query.traits = req.query.trait
  }
  if (Object.keys(query).length == 0) {
    // all query parameters are unspecified
    res.json({});
  }
  else {
  // results returned should only contain the fields specified below
  // excluding _id field since MongoDB includes it by default
    Animal.find(query, '-_id name species breed gender age', (err, animals) => {
      if (err) {
        res.type('html').status(500)
        res.send('Error: ' + err)
      }
      else if (animals){
        res.json(animals);
      }
      else { // no results found
        res.json({});
      }
    });
  }

});


/*
This API finds all Animals in the “animals” collection that have an age that is less than (but not equal to!) the age> parameter.
e.g. /animalsYoungerThan?age=12
The return value is an object that has two properties:
“count”: the number of Animals whose age is less than the age> parameter.
“names”: an array containing the names of the Animals whose age is less than the age> parameter (these can be arranged in any order in the array)
*/
app.use('/animalsYoungerThan', (req, res) => {
  let out = {count: 0, names: []}
  let age = req.query.age
  if (age) {
    Animal.find({age: {$lt: age}}, (err, animals) => {
      if (err) {
        res.type('html').status(500)
        res.send('Error: ' + err)
      }
      else {
        let count = animals.length
        if (count > 0) { // if results found
          out.count = count
          // select only the name field & populate the names array
          out.names = animals.map(animal => animal.name)
          res.json(out);
        }
        else { // no animals below age
          res.json({count:0})
        }
      }
    })
  }
  else { // query parameter unspecified
    res.json({});
  }

});


/*This API calculates the total price of purchasing the specified quantities of the Toys with the corresponding IDs, using the Toys’ price from the database.

e.g /calculatePrice?id[0]=123&qty[0]=2&id[1]=456&qty[1]=3

The return value is an object that has two properties:
“totalPrice”: the calculated total for all Toys.
“items”: an array containing objects that hold information about the Toys that are included; for each Toy, there should be an object with these three properties:
  “item”: the Toy’s ID, as specified in the query
  “qty”: the quantity of the Toy, as specified in the query
  “subtotal”: the Toy’s price multiplied by the quantity
*/

app.get('/calculatePrice', (req, res) => {
  var query = {};
  if (req.query.id) {
      query.id = req.query.id;
  }
  if (req.query.qty) {
      query.qty = req.query.qty;
  }

  var idToQtyMap = new Map();
  if (query.id.length && query.qty.length && query.id.length == query.qty.length) { // numbers of elements match
    for (var i = 0; i < query.id.length; i++) {
      var key = query.id[i];
      var val = query.qty[i];

      if (!isNaN(val) && val > 0) { // qty> parameter is less than one or non-numeric, then it and the corresponding id> parameter should be ignored
        if (idToQtyMap.has(key)) { // duplicate id
          idToQtyMap.set(key, Number(idToQtyMap.get(key)) + Number(val));
        } else {
          idToQtyMap.set(key, val);
        }
      }
    }

    var idToPriceMap = new Map();
    var items = [];
    var totalPrice = 0;

    Toy.find( {id : Array.from(idToQtyMap.keys())}, (err, toys) => {
      if (err) {
          res.type('html').status(500);
          res.send('Error: ' + err);
      } else {
        toys.forEach((toy) => idToPriceMap.set(toy.id, toy.price));

        for (var id of Array.from(idToPriceMap.keys())) {
          var item = {
            item : id,
            qty : idToQtyMap.get(id),
            subtotal : idToQtyMap.get(id) * idToPriceMap.get(id)
          }
          totalPrice += item.subtotal;
          items.push(item);
        }
          res.json({totalPrice : totalPrice, items : items});
      }
    });
  } else {
    res.json({});
  }

});



app.listen(3000, () => {
	console.log('Listening on port 3000');
    });


// Please do not delete the following line; we need it for testing!
module.exports = app;
