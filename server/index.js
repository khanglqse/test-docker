const express = require('express')
const app = express();
var cors = require('cors')

var allowedOrigins = ['https://api.khang.test',
                      'http://yourapp.com'];
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
app.get('/', function (req, res, next) {
  res.json({ok: true})
})
app.listen(5000, () => {
  console.log('Example app listening on port 5000!')
});
