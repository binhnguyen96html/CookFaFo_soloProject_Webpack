// Example using Express.js
const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const connectDB = require("./config/db");
const menuRouter = require("./routes/menuRoutes");
const productRouter = require("./routes/productRoutes");
const userRouter = require("./routes/userRoutes");
const path = require('path');

const OpenAI = require("openai");

// const {Configuration, OpenApi} = require('openai');

dotenv.config();

// Example specifying the port and starting the server
const port = process.env.PORT || 5000; // You can use environment variables for port configuration

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

// const config = new Configuration({
//   apiKey: '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'
// })

// const openai = new OpenApi(config)
// const openai = new OpenAI();

// async function main() {
//   const completion = await openai.chat.completions.create({
//     messages: [{ role: "system", content: "You are a helpful assistant." }],
//     model: "gpt-3.5-turbo",
//   });

//   console.log(completion.choices[0]);
// }

// main();

app.get('/api/chat', async (req, res) => {
  // const completion = await openai.createCompletion({
  //   model: 'text-davinci-003',
  //   max_token: 512,
  //   temperature: 0,
  //   prompt: 'create an 5 sentence article'
  // })

  // res.status(200).send(completion.data.choices[0])
  const openai = new OpenAI();
  async function main() {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "You are a helpful assistant." }],
      model: "gpt-3.5-turbo",
    });
  
    console.log(completion.choices[0]);
  }
  
  main();
  res.status(200).send(completion.data.choices[0])
})


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

if(process.env.NODE_ENV = 'production'){
  // statically serve everything in the build folder on the route '/build'
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });
  }

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
