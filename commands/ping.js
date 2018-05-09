module.exports = async function(client, message, cmd, args) {
    message.channel.send(`:ping_pong: **| Pong**!\nResponse recieved in \`????ms\`\nAPI latency is \`????ms\``)
        .then(m => {
            m.edit(`:ping_pong: **| Pong**!\nResponse recieved in \`${m.createdTimestamp - message.createdTimestamp}ms\`\nAPI latency is \`${Math.round(client.ping)}ms\``);
        });
};