const express = require("express");
const { ExpressPeerServer } = require("peer");

const app = express();

app.get("/", (req, res, next) => res.send("Hello world!"));

const server = app.listen(9000);

const peerServer = ExpressPeerServer(server, {
    path: "/myapp",
});

app.use("/peerjs", peerServer);

peerServer.on('connection', (client) => {
    console.log("[+] Client connected")
});

peerServer.on('disconnect', (client) => {
    console.log("[-] Client disconnected")
});
