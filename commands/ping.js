module.exports = {
    name: 'ping',
    description: 'simple ping command',

    run(msg) {
        msg.channel.send(`pong! 🏓`);
    }
}