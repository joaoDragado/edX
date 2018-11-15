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
*/
app.use('/findAnimals', (req, res) => {
  res.json({});
});

/*
This API finds all Animals in the “animals” collection that have an age that is less than (but not equal to!) the age> parameter.
The return value is an object that has two properties:
“count”: the number of Animals whose age is less than the age> parameter.
“names”: an array containing the names of the Animals whose age is less than the age> parameter (these can be arranged in any order in the array)
*/
app.use('/animalsYoungerThan', (req, res) => {
  res.json({});
});

/*This API calculates the total price of purchasing the specified quantities of the Toys with the corresponding IDs, using the Toys’ price from the database.
The return value is an object that has two properties:
“totalPrice”: the calculated total for all Toys.
“items”: an array containing objects that hold information about the Toys that are included; for each Toy, there should be an object with these three properties:
  “item”: the Toy’s ID, as specified in the query
  “qty”: the quantity of the Toy, as specified in the query
  “subtotal”: the Toy’s price multiplied by the quantity
*/
app.use('/calculatePrice', (req, res) => {
  res.json({});
});



app.listen(3000, () => {
	console.log('Listening on port 3000');
    });


// Please do not delete the following line; we need it for testing!
module.exports = app;
