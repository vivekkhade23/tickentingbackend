const express = require("express");

let PORT =process.env.PORT || 8080;


const cors = require("cors");
const UserRouter = require("./Controller/user.router");
const TicketRouter = require("./Controller/ticket.router");
const DbConnect = require("./config/db");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send("Ticket Page");
});

app.use("/", UserRouter);
app.use("/", TicketRouter);


app.listen(PORT||8080, async () => {
  await DbConnect();
  console.log(`Listening on http://localhost:${PORT}`);
});
