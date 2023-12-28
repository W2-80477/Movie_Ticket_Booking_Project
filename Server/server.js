const express = require('express');
const config = require('config');
const cors = require('cors');

const PORT = config.get("PORT");

const app = express();

const usersRoutesHandler = require('./routes/user');
const loginRoutesHandler = require('./routes/login');


app.use(cors());
app.use(express.json());

app.use("/user", usersRoutesHandler);
app.use("/login", loginRoutesHandler);


app.listen(PORT, () => console.log("server started at port " + PORT))