# Quisper example node server

Simple node server to convert Javascript logic to a webservice. It uses the [Express](https://expressjs.com/) as server.

## How to use

Install a recent version of NodeJS. Then run
```shell
npm install
export TOKEN=my-very-secret-token
npm start
```
to start the server. Only requests that supply your secret token in the `3scale-proxy-secret-token` header will be authenticated.

If you have curl installed, you can now make requests to the server as follows:
```
curl -H "3scale-proxy-secret-token: $TOKEN" -H 'Content-Type: application/json' localhost:3000/advice/alternatives -d '{"diet": [{"name": "meat"}]}'
```
The secret token is a variable in `api/filter/authentication.filter.js`, with default 'my-secret'. The port number can be modified with the `PORT` environment variable.

## Modifying

Modify `server.js` to change the server setup. Current routes are defined in `api/router` and filters are defined in `api/filter`.

Edit the `api/swagger.yaml` Swagger definition to reflect the new API.
