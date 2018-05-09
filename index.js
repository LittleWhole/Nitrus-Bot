const Discord = require('discord.js');
const client = new Discord.Client();

const config = require("./config.json");
const prefix = config.prefix;
const Ready = require("./events/ready.js");
const Message = require("./events/message.js");
const CommandHandler = require(config.handlers.command);

Ready(client);
Message(client, prefix, CommandHandler);

client.login(config.credentials.token);