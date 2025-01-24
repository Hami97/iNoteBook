const express = require("express");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");

const JWT_SECRET = "Harryisagoodb$oy";
// Route 1: Create a User using: POST "/api/auth/createuser". No login required.
router.post(
  "/createuser",
  [
    body("name", "Enter a valid Name").isLength({ min: 3 }),
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password must be atlest 8 Characters").isLength({
      min: 8,
    }),
  ],
  async (req, res) => {
    //If there are error, return bad request and the errors.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      // Attempt to create the user
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email already exist." });
      }

      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        //Checek whether the user with this email exist already.
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      const data = {
        user: {
          id: user.id,
        },
      };
      //JWT DATA
      const authtoken = jwt.sign(data, JWT_SECRET);
      // Send successful response
      // return res.json(user);
      return res.json(authtoken);
    } catch (err) {
      console.error(err.message);

      // Handle general server errors
      return res.status(500).json({ error: "Internal server error." });
    }
  }
);

// Route 2: Authenticate a user: POST "/api/auth/login". No login required.
router.post(
  "/login",
  [
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials." }); // User doesn't exist.
      }

      // Compare the password
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials." }); // Incorrect password.
      }

      // User data for JWT
      const data = {
        user: {
          id: user.id,
        },
      };

      // Generate JWT token
      const authtoken = jwt.sign(data, JWT_SECRET);

      // Send the authentication token
      res.json({ authtoken });
    } catch (err) {
      console.error(err.message);

      // Handle general server errors
      return res.status(500).json({ error: "Internal server error." });
    }
  }
);

// Route 3: Get loggedin User Details: POST "/api/auth/getuser". Login required.
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    res.staus(500).send("Internal server error");
  }
});

module.exports = router;
