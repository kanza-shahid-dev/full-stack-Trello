import express from "express";
import mongoose from "mongoose";
import { createServer } from "http";
import { Server, Socket } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.get("/", (req, res) => {
  res.send("Hello World");
});
io.on("connection", () => {
  console.log("connected");
});

mongoose.connect("mongodb://localhost:27017/test").then(() => {
  console.log("Connected to MongoDB");
  httpServer.listen(4001, () => {
    console.log("Server is running on port 4001");
  });
});
