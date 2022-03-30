const { MessageEmbed } = require('discord.js');

    const Embed = new MessageEmbed()
        .setColor('#ffffff')
        .setAuthor({ name: 'Hey, I\'m Harold!' } )
        .setDescription('Here you can find a list of my commands. I\'m still a work in progress, so stay tuned for updates!')
        .addFields(
            { name: 'h!help', value: 'You\'re already here.' },
            { name: 'h!new \<name\>, \<date\>, \<time\>', value: 'Give me an assignment name (no spaces) and deadline, and I\'ll ping you when you\'re done. Multiple assignments are allowed!' },
            { name: 'h!remove \<id\>', value: 'Removes an assignment from your list.' },
            { name: 'h!clear \<id\>', value: 'Clears all assignments from your list.' },
            { name: 'h!view', value: 'View all current assignments and deadlines.'},
            { name: 'h!motivate', value: 'A motivational quote for you! '},
            { name: 'h!resources', value: 'A list of resources for more information about procrastination and how to combat it!' }
        )
        .setFooter({ text: 'Created by eggnog#9209, version 1.0' });

module.exports = {
    name: 'help',
    description: 'lists all the commands',
    run(msg) {
        msg.channel.send({ embeds: [Embed] });
    }
}