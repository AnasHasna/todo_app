const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const hpp = require("hpp");
const { errorHandler } = require("./middleware/error");
const connecToDB = require("./config/connectToDB");
const todoRouter = require("./routes/todoRouter");

// dotenv config
require("dotenv").config();

// creating express app
const app = express();

// security
app.use(helmet());
app.use(cors());
app.use(hpp());

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);

//routes
app.use("/todos", todoRouter);

//mongoose connection
connecToDB();

// server instance
const server = require("http").createServer(app);

// server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
