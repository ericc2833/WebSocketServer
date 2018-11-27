const Socket = require("ws");
const Config = require("./config")
const Server = Socket.Server;

const port = Config.port;
console.log("Websocket server listening on %d", port);

const wss = new Server({ port });
console.log("Websocket server Created");

wss.on("connection", (ws, req) => {
    console.log(`Websocket connection opened for IP: ${req.connection.remoteAddress}`);
    
    ws.on("close", () => {
        console.log(`Websocket connection closed for IP: ${req.connection.remoteAddress}`);
    })
});

wss.broadcast = (data) => {
    console.log(`Broadcasting message to ${wss.clients.size} clients`);
    wss.clients.forEach(function each(client) {
        if (client.readyState === Socket.OPEN) {
            client.send(data);
        }
    });
};

module.exports.send = (msg) => {
    wss.broadcast(JSON.stringify(msg));
};
