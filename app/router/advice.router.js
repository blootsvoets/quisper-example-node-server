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

var router = require('express').Router();

// define some alternatives rule
router.post('/alternatives', function(req, res) {
  var body = req.body
  if (!body.diet || !body.diet[0] || !body.diet[0].name) {
    res.status(400).json({
      errors: [
        {code: 'malformed_request', detail: 'property diet.[].name is missing'},
      ]
    });
    return
  }
  var diet = body.diet[0].name;
  
  if (diet == 'meat') {
    res.json({
      alternatives: ['beans', 'tofu']
    })
  } else if (diet == 'soda') {
    res.json({
      alternatives: ['water', 'tea']
    })
  } else {
    res.json({
      alternatives: []
    })
  }
});

// define some current health rules
router.post('/health', function(req, res) {
  res.json({ ifthis: 'thenthat' });   
});

module.exports = router
