// Example web service for Quisper
// Copyright (C) 2018 The Hyve
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

// support URL-encoded and JSON requests 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CORS and authentication on all routes
app.all('/*', require('./api/filter/cors.filter'));
app.all('/advice/*', require('./api/filter/authentication.filter'))

// Define the specific routes
app.use('/advice', require('./api/router/advice.router.js'))
app.get('/swagger.yaml', function(req, res) {
  res.sendFile('api/swagger.yaml', { root: __dirname });
});

// Start the server
var port = process.env.PORT || 3000;
app.listen(port);
console.log('listening on http://localhost:' + port);
