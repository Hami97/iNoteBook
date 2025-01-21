const express = require ('express');
const User = require ('../models/User');
const { body, validationResult } = require('express-validator');
const router = express.Router();

//Create a User using: POST "/api/auth/". Doesn't require auth.
router.post('/', [
    body('name', 'Enter a valid Name').isLength({ min: 3 }),
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Password must be atlest 8 Characters').isLength({ min: 8 }),
] , async (req,res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        // Attempt to create the user
        const user = await User.create({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        });
  
        // Send successful response
        return res.json(user);
      } catch (err) {
        console.error(err);
  
        // Handle specific errors like duplicate email
        if (err.code === 11000) { // MongoDB duplicate key error code
          return res.status(400).json({ error: 'Email already exists.' });
        }
  
        // Handle general server errors
        return res.status(500).json({ error: 'Internal server error.' });
      }
    }
  );
  
  module.exports = router;