/* MongoDB - Mongoose
You can access MongoDB directly from your Node app using the MongoClient
Or, you can install helper packages such as Mongoose to simplify some tasks:
npm install mongoose --save
*/


var express = require('express');
var app = express();

/*  EJS
EJS, or EmbeddedJS, is a view engine that uses data and embedded JavaScript to produce HTML. This allows webpages to be developed statically and rendered dynamically server-side.
EmbeddedJS is a package that can be installed with the command: npm install ejs

*/

var express = require('express');
var app = express();

// Set EJS as the default rendering method in our app
app.set('view engine', 'ejs');

// the code of the previous example, refactored for use with ejs
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/handleForm', (req, res) => {
  var name = req.body.username;
  var animals = [].concat(req.body.animal);
  // renders showAnimals.ejs in views folder
  res.render('showAnimals', { name: name, animals: animals });
});

/*
HTML forms : The form specifies the action and method that the submit button triggers,
ex. <form action="/handleForm" method="post">
i.e. submit sends an HTTP request for the url handleForm via the POST method,
with the data sent in the body of the HTTP request.
To read the body of the HTTP request in Express, we use the body-parser middleware.
** npm install body-parser **

*/
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
// the urlencoded method handles data submitted via POST
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/handleForm', (req, res) => {
  // we now access the body of the request, using the name properties of the <input> elements of our form, i.e. username , animal
  var name = req.body.username;
  /*we need animals to be an array, so
  so we use the hack below to make sure
  animals is array, regardless of the num of items checked.
  */
  var animals = [].concat(req.body.animal);
  // the following is code running in the server,
  // so we need to generate the HTML to present to the client browser
  res.type('html').status(200);
  res.write('Hello, ' + name + ', nice to meet you.');
  res.write('<p>Here are the animals you like:');
  res.write('<ul>');
  animals.forEach( (animal) => {
    res.write('<li>' + animal + '</li>');
  });
  res.write('</ul>');
  res.write("<a href='/public/form.html'>" + "Back to form</a>");
  res.send('Thank you!');
});


/*
Request Object Query Properties
example URL : http://localhost:3000/?name=Lydia&location=United+States
query starts with ? , params are separated by &, + is converted to whitespace
*/

app.use('/', (req, res) => {
  var query = req.query;
  // print out the JSON object
  // containing the key/value pairs of our Request.
  console.log(query);

  var name = query.name;         // 'Lydia'
  var location = query.location; // 'USA'

  var length = Object.keys(query).length; // 2

  res.write('Hello ' + name +
            '. I see you are visiting from ' + location + '.');
});

/*
alternative form of HTTP Request object
- parameterized URL
ex. http://localhost:3000/name/Lydia/location/United States
*/

app.use('/name/:userName/location/:userLocation',
(req, res) => {
  var params = req.params;
  // print out the JSON object
  // containing the key/value pairs of our Request.
  console.log(params);

  var name = params.userName; // 'Lydia'
  var location = params.userLocation; // 'United States'

  var length = Object.keys(params).length; // 2

  res.write('Hello ' + name +
            '. I see you are visiting from ' + location + '.');
});


// middleware - subroutes

var logger = (req, res, next) => {
var url = req.url;
var time = new Date();
console.log('Received request for ' + url +
' at ' + time);
next();
};
// this will invoke logger on every HTTP request
//app.use(logger);

// logger is invoked when accessing URIs in the public folder
app.use('/public', logger, express.static('files'));

// express.static serves static files that are locally stored in the folder 'files'
//app.use('/public', express.static('files'));


var nameFinder = (req, res, next) => {
  var name = req.query.name;
  if (name) req.username = name.toUpperCase();
  else req.username = 'Guest';
  next();
}

var greeter = (req, res, next) => {
  res.status(200).type('html');
  res.write('Hello, ' + req.username);
  next();
}

var adminName = (req, res, next) => {
  req.username = 'Admin';
  next();
}

/*
When same combinations of middleware functions are being used in multiple routes,
we can combine middleware functions into “subroutes” using Routers and then use those in our routes.
*/

var logger = (req, res, next) => { . . . }
var header = (req, res, next) => { . . . }
var footer = (req, res, next) => { . . . }

// implement subroute
var commonRoute = express.Router();
commonRoute.use(header, greeter, footer);

app.use('/welcome', logger, nameFinder,
        header, greeter, footer, (req, res) => { res.end(); } );

//apply subroute
app.use('/admin', logger, adminName,
        commonRoute, (req, res) => { res.end(); } );

//
app.use('/about', (req, res) => {
  res.send('This is the about page');
});

app.use(/*default*/ (req, res) => {
  res.status(404).sendFile(__dirname + '/404.html');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
