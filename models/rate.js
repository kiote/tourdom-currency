var mongoose = require('mongoose');
require('mongoose-double')(mongoose);
var mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/myproject'
mongoose.connect(mongoUri);

var SchemaTypes = mongoose.Schema.Types;
var rateSchema = mongoose.Schema({
  base: String,
  usd: {
    type: SchemaTypes.Double
  },
  rub: {
    type: SchemaTypes.Double
  },
  eur: {
    type: SchemaTypes.Double
  }
});

var Rate = mongoose.model('Rate', rateSchema);
module.exports = Rate
