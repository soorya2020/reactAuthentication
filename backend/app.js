require('dotenv').config()
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");

const { signin, signup, protect } = require("./Resource/auth");

const userRouter = require("./Routes/userRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

// routes
app.get('/',(req,res)=>{
    res.send('welcome to react mp backend')
})
//emial,password
app.post('/signup', signup);
app.post('/signin', signin);

app.use('/api', protect);
app.use('/api', userRouter);

const PORT = process.env.PORT

app.listen(PORT, (req, res) => {
  console.log(`backend server is running on ${PORT}`);

  mongoose
    .connect("mongodb://localhost:27017/medium-auth")
    .then((data) => console.log("db connected"))
    .catch((err) => console.log("db error" + err));
})
