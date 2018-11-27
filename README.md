BetReceipts Server
-----------------
A simple webserver that sends bet receipt notifications to all the connected clients

#### Connection
Use any Websocket client to connect to the websocket server. Here is a simple example using websocket api
````js
websocket = new WebSocket("SERVER_ADDRESS");
function onMessage(evt) {
    console.log(evt);
}
websocket.onmessage = function(evt) { onMessage(evt) };
````
