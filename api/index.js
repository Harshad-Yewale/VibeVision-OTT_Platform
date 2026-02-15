const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const movieRoute = require('./routes/movies');
const listRoute = require('./routes/lists');

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {}).then(() => {
    console.log('Connected to MongoDB');}).catch((err) => { 
    console.log(err);
});

app.use((err, req, res, next) => {
    console.error("Unhandled Error:", err);
    res.status(500).json({ message: "An unexpected error occurred", error: err.message });
});

app.use(express.json());

const path = require("path");
app.use("/images", express.static(path.join(__dirname, "..", "images")));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);



app.listen(8800, () => {
    console.log('Server is running on port 8800');
});