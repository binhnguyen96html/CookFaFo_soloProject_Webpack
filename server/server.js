// Example using Express.js
const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const connectDB = require("./config/db");
const menuRouter = require("./routes/menuRoutes");
const productRouter = require("./routes/productRoutes");
const userRouter = require("./routes/userRoutes");

dotenv.config();

// Example specifying the port and starting the server
const port = process.env.PORT || 8000; // You can use environment variables for port configuration

//connect data with mongoDB
connectDB();

const app = express();

//This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json());
app.use(cors());

//connect app with routers
app.use("/api/menu", menuRouter);
app.use("/api/products", productRouter);
app.use("/api/user", userRouter);

// app.use("/", (req, res) => {
//   res.json('hello')
// });

//404 handler
app.use("*", (req, res) => {
  res.status(404).send("Not Found");
});

//Global error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
