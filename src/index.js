const Eosws = require("@dfuse/eosws-js");
const WebSocket = require("ws");
const Server = require("./server");
const Config = require("./config");

const EoswsClient = Eosws.EoswsClient;
const InboundMessageType = Eosws.InboundMessageType;

const socketFactory = () =>
    new WebSocket(
        `wss://${Config.endpoint}/v1/stream?token=${Config.api_token}`,
        { origin: Config.origin }
    );

const client = new EoswsClient(
    Eosws.createEoswsSocket(socketFactory, {
        autoReconnect: true
    })
);

const onMessage = message => {
    if (message.type == InboundMessageType.ACTION_TRACE) {
        data = message.data;
        if (data && data.trace && data.trace.act) {
            Server.send(data.trace.act);
        }
    }
};

client
    .connect()
    .then(() => {
        console.log(`Connected to ${Config.endpoint}`);

        console.log(`Listening to betreceipt actions for ${config.contract}`)

        client
            .getActionTraces({
                account: config.contract,
                action_name: config.bet_receipt_action
            })
            .onMessage(onMessage);
    })
    .catch(error => {
        console.log("ERROR: Unable to connect", error);
    });
