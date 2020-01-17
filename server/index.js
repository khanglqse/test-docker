const express = require('express')
const app = express();
var cors = require('cors')
const fs = require('fs')
const http = require('http')

var allowedOrigins = ['https://api.khang.test',
                      'https://dashboard.khang.test',
                      'https://khang.test'];
app.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.get('/',  function (req, res, next) {
  res.json({ok: true})
})

http.createServer({
    key: fs.readFileSync('/etc/backend/certs/rootCA.key'),
  cert: fs.readFileSync('/etc/backend/certs/rootCA.pem'),
  passphrase: '123456',
  requestCert: true
}, app)
.listen(5000);
