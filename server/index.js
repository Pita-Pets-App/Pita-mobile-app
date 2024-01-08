const express = require("express");
const cors = require('cors')

const db = require('./database-Sequelize');
const usersRoute = require("./routes/users.routes");
const petRoute = require("./routes/pets.routes");
const providerRoute = require("./routes/providers.routes");
const LFARoute = require("./routes/LFA.routes");
const rateRoute = require("./routes/rate.routes");
const eventRoute = require("./routes/event.routes");
const app = express();
const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));
app.use(cors())


//public eroutes
// app.use("auth", authRoute)
// app.use("home")


// app.use(isAuth())

//secured routes
app.use("/api",usersRoute)
app.use("/api",petRoute)
app.use("/api",providerRoute)
app.use("/api",LFARoute)
app.use("/api",rateRoute)
app.use("/api",eventRoute)


app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
