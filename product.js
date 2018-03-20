// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var productSchema = new mongoose.Schema({
    Sensortype: String,
    SensorId: String,
    Status: Number,
    Datetime: String
});

// Return model
module.exports = restful.model('Products', productSchema);