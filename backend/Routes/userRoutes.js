const express = require('express');
const usersController = require('../Controller/userController');
const User = require('../Model/userModel');
const axios = require('axios')

const router = express.Router();

router.get('/users', async (req, res) => {
  
        
        try {
            const {data:response}=await axios.get('https://jsonplaceholder.typicode.com/users')
            res.status(200).send(response)
            
        } catch (error) {
            console.log(error);
            res.status(500).send(error)
        }
  

});

router.get('/users/:id', async (req, res) => {

    try {
        const {data:response}=await axios.get(`https://jsonplaceholder.typicode.com/users/${req.params.id}`)
        
        res.status(200).send(response)
        
    } catch (error) {
        console.log(error.message,req.params);
        return res.status(500).send({ message: "something went wrong" }) 

    }

})

// router.post('/users', async (req, res) => {
//     try {
//         console.log(req.body );
//         const user = User.create(req.body);
//         res.status(201).send({ data: user });
//     } catch (e) {
//         if (e.code === 11000) {
//             return res.status(409).send( { message: 'duplicate key' });
//         } else {
//             throw new Error(e);
//         }
//     }
//     return res.status(500).send({ message: "something went wrong" }) 

// })

module.exports = router;