const express = require("express");
const cors = require('cors')
const { Server } = require("socket.io");
const { createServer } = require("http")

const db = require('./database-Sequelize');
const usersRoute = require("./routes/users.routes");
const petRoute = require("./routes/pets.routes");
const providerRoute = require("./routes/providers.routes");
const LFARoute = require("./routes/LFA.routes");
const rateRoute = require("./routes/rate.routes");
const eventRoute = require("./routes/event.routes");
const serviceRoute = require("./routes/service.routes");
const ChatRoute = require("./routes/chat.routes");
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
app.use("/api",serviceRoute)
app.use("/api",ChatRoute)

////// chat part 
const server = createServer(app);
const io = new Server(server, {
  cors:{
    origin:"http://localhost:3000",
    methods:["GET","POST"]
  },
  });
 io.on("connection",(socket)=>{
   console.log("Socket Connected" ,socket);
   socket.on("user connected:",socket.id)
   socket.on("disconnect", () => {
    console.log("user disconnected:", socket.id);
  });
 })

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});

server.listen(3001,()=>{
  console.log("Socket.io is running on port 3001");
}
)