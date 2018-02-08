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

// secret token
var token = process.env.TOKEN || 'my-secret';

// only allow users that use our special token
module.exports = function(req, res, next) {
  var suppliedToken = req.header('3scale-proxy-secret-token')
  if (!suppliedToken) {
    res.status(401)
        .json({errors: [{code: 'token_missing'}]})
        .end()
  } else if (suppliedToken != token) {
    res.status(403)
        .json({errors: [{code: 'token_invalid'}]})
        .end()
  } else {
    next()
  }
}
