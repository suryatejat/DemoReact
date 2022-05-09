const express = require("express")
const router = express.Router()
const User = require("../Models/User")

router.get('/', async (req,res) => {
    try{
        const users = await User.find()
        res.json(users)
    }
    catch(err){
        res.json({message : err})
    }
})

router.post('/', async (req,res) => {
    const user = new User({
        Email: req.body.Email,
        Password: req.body.Password
    })

    try{
        const newUser = await user.save()
        res.json(newUser)
    }
    catch(err){
        res.json({message : err})
    }
})

router.get('/:email', async (req,res) => {
    try{
        const user = await User.find({Email: "demo"})
        res.json(user)
    }
    catch(err){
        res.json({message: err})
    }
})

router.delete('/:email', async (req,res) => {
    try{
        const removedUser = await User.remove({Email: req.params.email})
        res.json(removedUser)
    }
    catch(err){
        res.json({message: err})
    }
})

router.patch('/:email', async (req,res) => {
    try{
        const updatedUser = await User.updateOne(
            {Email: req.params.email},
            {$set: {Password: req.body.Password}
        })
        res.json(updatedUser)
    }
    catch(err){
        res.json({message: err})
    }
})

module.exports = router