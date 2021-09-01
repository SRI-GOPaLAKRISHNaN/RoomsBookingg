const mongoose = require('mongoose');

var mongoURL = 'mongodb://localhost:27017/BeeRooms'

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true })

var connection = mongoose.connection

connection.on('error', () => {
    console.log('Failed To Connect With Database');
})

connection.on('connected', () => {
    console.log('Database Connected');
})

module.exports = mongoose