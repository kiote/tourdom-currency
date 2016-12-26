var mongoose = require('mongoose');
require('mongoose-double')(mongoose);
var mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/myproject'
mongoose.connect(mongoUri);

var SchemaTypes = mongoose.Schema.Types;
var rateSchema = mongoose.Schema({
  usd: {
    rub: {
      type: SchemaTypes.Double
    },
    eur: {
      type: SchemaTypes.Double
    },
    usd: {
      type: SchemaTypes.Double
    }
  },
  rub: {
    rub: {
      type: SchemaTypes.Double
    },
    eur: {
      type: SchemaTypes.Double
    },
    usd: {
      type: SchemaTypes.Double
    }
  },
  eur: {
    rub: {
      type: SchemaTypes.Double
    },
    eur: {
      type: SchemaTypes.Double
    },
    usd: {
      type: SchemaTypes.Double
    }
  },
});

var Rate = mongoose.model('Rate', rateSchema);
module.exports = Rate
