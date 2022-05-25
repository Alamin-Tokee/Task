const router = require('express').Router();
const User = require('../models/user');
const {isLoggedIn} = require('../middleware/authhandler');

//Create station
router.post('/create', isLoggedIn , async (req, res) => {
    const station = await Station.find({name: req.body.name});
    try{
        if(!station){
            const newStation = {
                user: req.user,
                name: req.body.name,
                stat: req.body.stat,
            }
            const newData = await newStation.save();
            res.status(200).json({
                'Message': 'All data os save',
                 data: newData,
            })
        }else{
            res.status(500).json({
                'messgae': 'Internal server error'
            })
        }
    } catch (err){
        res.json(err);
    }
})


//Read Station By Id
router.get('/read/:id', isLoggedIn, async(req, res) => {
    const station = await Station.findById({_id: req.params.id});
    try {
        if(station){
            console.log(station);
            res.status(200).json({
                data: station,
            })
        }else{
            res.status(500).json({
                'msg': 'Internal server side error',
            })
        }
    } catch(err){
        res.json(err);
        console.log(err);
    }
})

//Read all station
router.get('/read', isLoggedIn, async(req, res) => {
    const station = await Station.find({});
    try {
        if(station){
            console.log(station);
            res.status(200).json({
                data: station,
            })
        }else{
            res.status(500).json({
                'msg': 'Internal server side error',
            })
        }
    } catch(err){
        res.json(err);
        console.log(err);
    }
})


//Update sation
router.put('/update/:id', isLoggedIn, async(req, res) => {
    const station = await Station.findById({_id:req.params.id});
    try {
        if(station){
            station.user = req.user,
            station.name = req.body.name;
            station.stat = req.body.stat;

            const data = await station.save();
            res.status(200).json({
                'msg': 'Data is updated',
                'data' : data
            })
        }else{
            res.status(501).json({
                'msg': 'Internal Server Side error',
            })
        }
    } catch(err){
        res.json(err);
    }
})

//Delete station
router.delete('/delete/:id', isLoggedIn, async(req, res) => {
    const station = await Station.findById({_id: req.params.id});
    try {
        if(station){
            station.remove();
            res.status(200).json({
                'message': 'Satation Deleted',
            })
        }else{
            res.status(500).json({
                'message': 'Server side error',
            })
        }
    } catch(err){
        console.log(err);
        res.json(err);
    }
})

module.exports = router;