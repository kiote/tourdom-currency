var express = require('express');
var app = express();
var Rate = require('./models/rate');

app.get('/', function (req, res) {
  Rate.find({}, function(err, rates){
    if(err) return res.send(500);
    res.set('Content-Type', 'application/json');
    var rates = rates.map(function(a){
      return {
        usd: a.usd,
        eur: a.eur,
        rub: a.rub
      }
    });
    res.json({'rates': rates[0]})
  })
});

const port = process.env.PORT || 8082;
app.listen(port, function () {
  console.log('App listening on port' + port +'!');
});
