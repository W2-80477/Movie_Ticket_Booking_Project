const express = require('express');
const config = require('config');
const cors = require('cors');

const PORT = config.get("PORT");

const app = express();

const usersRoutesHandler = require('./routes/user');
const loginRoutesHandler = require('./routes/login');
const adminLoginHandler = require("./routes/adminLogin");
const screensRouteHandlerApp= require('./routes/screens');
const moviesRouteHandlerApp = require('./routes/movies');
const theatreRouteHandlerApp = require('./routes/theatre');
const bookingRouteHandlerApp = require('./routes/booking');
const showSeatRouteHandlerApp = require('./routes/showSeat');


app.use(cors());
app.use(express.json());

app.use("/user", usersRoutesHandler);
app.use("/login", loginRoutesHandler);
app.use("/admin", adminLoginHandler);
app.use("/screens", screensRouteHandlerApp);
app.use("/movies",moviesRouteHandlerApp);
app.use("/theatre",theatreRouteHandlerApp);
app.use("/booking",bookingRouteHandlerApp);
app.use("/showSeat",showSeatRouteHandlerApp);


app.listen(PORT, () => console.log("server started at port " + PORT))