const { MessageEmbed } = require('discord.js');
const pfp = 'https://cdn.discordapp.com/attachments/672508709754241044/958551636140257360/harold.png'

    const Embed = new MessageEmbed()
        .setColor('#ffffff')
        .setTitle('Procrastination Resources')
        .setDescription("Are you struggling a lot with procrastination? I've got some links for you to check out. Don't worry! You'll get through it. 😊")
        .addFields(
            { name: "What is Procrastination? - verywellmind", value: "[A detailed description of procrastination and its causes.](https://www.verywellmind.com/the-psychology-of-procrastination-2795944)" },
            { name: "Understanding and Overcoming Procrastination - Princeton University", value: "[A Princeton article explaining effective ways to combat procrastination.](https://mcgraw.princeton.edu/understanding-and-overcoming-procrastination)"},
            { name: "When is Procrastination a Matter of Mental Health? - U.S. News, Health", value: "[If you feel you need professional help in regards to your work habits.](https://health.usnews.com/wellness/articles/is-your-chronic-procrastination-actually-a-matter-of-mental-health)"},
            { name: "*Pomodoro* (Tomato) Timer]", value: "[A special timer app designed specifically for procrastinators.](https://pomofocus.io/)"},
            )

module.exports = {
    name: 'resources',
    description: 'gives the user some resources regarding procrastination',
    run(msg) {
        msg.channel.send({ embeds: [Embed] });
    }
}