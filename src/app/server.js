const express = require('express');
const app = express();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');

var port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const authCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://nikita-glukhi.auth0.com/.well-known/jwks.json"
  }),
  audience: 'test-api',
  issuer: "https://nikita-glukhi.auth0.com/",
  algorithms: ['RS256']
});

app.listen(port);
console.log('Server started! Please, check this address: localhost:3001');
