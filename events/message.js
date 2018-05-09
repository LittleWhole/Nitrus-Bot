module.exports = async function(client, prefix, handler) {
        client.on('message', async message => {
            // Verify that the message is not sent by a bot.
            if (message.author.bot || (message.guild && !message.guild.available) || (message.guild && !message.guild.me.permissions.has("SEND_MESSAGES"))) return;

            // Get command
            const args = message.content.split(/\s+/g);
            const cmd = args.shift().slice(prefix.length);

            // Verify command
            if (!cmd) return;
            if (!message.content.startsWith(prefix)) return;

            // Handle command
            handler(client, message, cmd, args);
    });
};