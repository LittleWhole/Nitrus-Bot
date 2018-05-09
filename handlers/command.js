let Command;
module.exports = async function(client, message, cmd, args) {
    try {
        Command = require(`../commands/${cmd}.js`);
        Command(client, message, cmd, args)
    } catch {
        return;
    }
};