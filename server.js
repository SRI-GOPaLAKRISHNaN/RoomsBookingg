const express = require('express');

const app = express();

const dbconfig = require('./db')

const roomsRoute = require('./routes/roomsRoute')

const usersRoute = require('./routes/usersRoute')
const bookingsRoute = require('./routes/bookingsRoute')

//if you not write this statement you cannot recieve this parameters
app.use(express.json())
app.use('/api/Rooms', roomsRoute)
app.use('/api/users', usersRoute)
app.use('/api/bookings', bookingsRoute)



const port = process.env.PORT || 7000;

app.listen(port, () => console.log(`Nodemon Server Started on Port ${port}`));