'use strict';

const AtomName = 'DateBirth';

module.exports = {
  type: Date
, validate: require('./../hadrons/'+AtomName.toLowerCase()+'ValidateMongoose')
// , required: true
}