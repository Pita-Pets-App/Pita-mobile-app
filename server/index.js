const express = require("express");
const cors = require('cors')
const { Server } = require("socket.io");
const { createServer } = require("http")

const db = require('./database-Sequelize');
const usersRoute = require("./routes/users.routes");
const petRoute = require("./routes/pets.routes");
const providerBRoute = require("./routes/provbf.routes");
const providerRoute = require("./routes/providers.routes");
const LFARoute = require("./routes/LFA.routes");
const rateRoute = require("./routes/rate.routes");
const eventRoute = require("./routes/event.routes");
const serviceRoute = require("./routes/service.routes");
const ChatRoute = require("./routes/chat.routes");
const adminRoute = require("./routes/admin.routes");
const authRoute = require("./routes/auth.routes")
const authenticateToken = require ("./middlewares/authMiddelware")


const app = express();
const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));
app.use(cors())



app.use("/api",authRoute)
app.use("/api",ChatRoute)
app.use("/api",adminRoute)

app.use("/api", authenticateToken);

app.use("/api",usersRoute)
app.use("/api",petRoute)
app.use("/api",providerBRoute)
app.use("/api",providerRoute)
app.use("/api",LFARoute)
app.use("/api",rateRoute)
app.use("/api",eventRoute)
app.use("/api",serviceRoute)


////// chat part 
const chatserv = createServer(app);
const io = new Server(chatserv, {
  cors:{
    origin:"http://localhost:3000",
    methods:["GET","POST"]
  },
  });
  io.on("connection", (socket) => {
    console.log(`Socket Connected: ${socket.id}`);
  
    socket.on('add', (message) => {
      console.log('Received message:', message);
      io.emit('recive', message);
    });
  
    socket.on('disconnect', () => {
      console.log(`User disconnected: ${socket.id}`);
    });
  });

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}!`);
});

chatserv.listen(3001,()=>{
  console.log("Socket.io is running on port 3001");
}
)