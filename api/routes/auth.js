const router = require('express').Router();
const User = require('../Models/User');
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
// REGISTER
router.post('/register', async (req, res) => {
  try {
    if (!req.body.username || !req.body.email || !req.body.password) {
      return res.status(400).json({ error: "All fields are required!" });
    }
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
    });
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    console.error("Error during registration:", err);
    res.status(500).json({ error: "Server error occurred during registration." });
  }
});
// LOGIN
router.post('/login', async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({ error: "Email and password are required!" });
    }

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password!" });
    }

    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);

    if (decryptedPassword !== req.body.password) {
      return res.status(401).json({ error: "Invalid email or password!" });
    }
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.SECRET_KEY,
      { expiresIn: "5d" }
    );
    const { password, ...info } = user._doc;
    res.status(200).json({ ...info, accessToken });
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).json({ error: "Server error occurred during login." });
  }
});

// FORGOT PASSWORD
router.post('/forgotPassword', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ error: "Invalid email!" });
    }
    const accessToken = jwt.sign(
      {id: user._id,}, process.env.SECRET_KEY, { expiresIn: "5d" }
    );
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'harshadyewale73@gmail.com',
        pass: process.env.EMAIL
      }
    });
    var mailOptions = {
      from: 'harshadyewale73@gmail.com',
      to: req.body.email,
      subject: 'Plz click on the link to reset your password',
      text: `http://localhost:5173/resetPassword/${user._id}/${accessToken}`
    };   
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        return res.status(200).json({ message: "Email sent!" });
      }
    });
  } catch (err) {
    console.error("Error during forgot password:", err);
    res.status(500).json({ error: "Server error occurred during forgot password." });
  }
}
);

// RESET PASSWORD
router.post('/resetPassword/:id/:token', async (req, res) => {
  const { id, token } = req.params; 
  const { newPassword } = req.body; 
  if (!newPassword) {
    return res.status(400).json({ error: "New password is required." });
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (decoded.id !== id) {
      return res.status(401).json({ error: "Invalid or expired token." });
    }
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
    const encryptedPassword = CryptoJS.AES.encrypt(newPassword, process.env.SECRET_KEY).toString();
    await User.findByIdAndUpdate(id, { password: encryptedPassword });
    res.status(200).json({ message: "Password updated successfully!" });
  } catch (err) {
    console.error("Error during reset password:", err);
    res.status(500).json({ error: "Server error occurred during password reset." });
  }
});
module.exports = router;
