var request = require('request');
var Rate = require('./models/rate');

var opts = {
  server: {
    socketOptions: { keepAlive: 1 }
  }
};

// clear previously scrapped tours
Rate.remove({}, function(err, removed){
  console.log('removed');
});

// parse
var datasource = 'https://openexchangerates.org/api/latest.json?app_id=' + process.env.OPENEXCHANGERATE
request(datasource, function (err, result, body) {
  if (err) {
    console.log(err);
  }
  if (!err && result.statusCode == 200) {
    var rates = JSON.parse(body);
    var eur = rates['rates']['EUR'];
    var rub = rates['rates']['RUB'];
    new Rate({'usd':
                {'eur': eur,
                 'rub': rub
                },
              'rub':
                { 'usd': 1/rub,
                  'eur': eur/rub
                },
              'eur':
                { 'usd': 1/eur,
                  'rub': rub/eur
                }
              }).save();
  }
})
