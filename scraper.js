var request = require('request');
var Rate = require('./models/rate');

var opts = {
  server: {
    socketOptions: { keepAlive: 1 }
  }
};

// clear previously scrapped tours
Rate.remove({}, function(err, removed){
  console.log(removed);
});

// parse
var datasource = 'https://openexchangerates.org/api/latest.json?app_id=' + process.env.OPENEXCHANGERATE
request(datasource, function (err, result, body) {
  if (!err && result.statusCode == 200) {
    var rates = JSON.parse(body);
    new Rate({'base': 'USD',
              'usd': 1,
              'eur': rates['rates']['EUR'],
              'rub': rates['rates']['RUB']}).save();
  }
})
