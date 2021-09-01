const express = require('express');
const router = express.Router();

const Room = require('../models/room');

router.get('/getallrooms', async (req, res) => {
    try {
        const Rooms = await Room.find({})
        res.send(Rooms)
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

router.post('/getroombyid', async (req, res) => {
    const roomid = req.body.roomid
    try {
        const room = await Room.findOne({ _id: roomid })
        res.send(room)
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

router.post("/addroom", async (req, res) => {
    try {
        const newrooom = new Room(req.body)
        await newrooom.save();
        res.send('Rooms Added SuccessFully')
    } catch (error) {
        return res.status(400).json((error));
    }
})

module.exports = router;