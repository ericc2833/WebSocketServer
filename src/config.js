if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

config = {}
config.endpoint = process.env.ENDPOINT || "kylin.eos.dfuse.io";
config.api_token = process.env.API_TOKEN;
config.origin = process.env.ORIGIN || "https://example.com"
config.contract = process.env.CONTRACT || "bettestapi12"
config.bet_receipt_action = process.env.ACTION_NAME || "betreceipt"
config.port = process.env.PORT || 7457

module.exports = config