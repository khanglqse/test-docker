const express = require('express')
const app = express();
var cors = require('cors')

var whitelist = ['https://dashboard.khang.test', 'https://khang.test']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.get('/', cors(corsOptions), function (req, res, next) {
  res.json({ok: true})
})
app.listen(5000, () => {
  console.log('Example app listening on port 5000!')
});
