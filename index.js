const { Client, Intents, Collection } = require('discord.js');
const { token } = require('./config.json');
const { prefix } = require('./config.json');
const fs = require('fs');
const mongoose = require('mongoose');
const userSchema = require('./schema.js');

// Initalizing Discord bot client (base code taken from discordjs.guide)
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}`);

  // Bot status (just for fun)
  client.user.setActivity("with fire", {
    type: "PLAYING",
  });
});

// Command handling
client.commands = new Collection;
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js')); // ensure only .js files are read

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  console.log(`Command ${file} ready`);
  client.commands.set(command.name, command);
}

// Running a command
client.on('messageCreate', message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (!client.commands.get(command)) return;
  client.commands.get(command).run(message, args);
})

// Connecting to Mongoose
const { MONGODB_URI } = require('./config.json');

mongoose
  .connect(MONGODB_URI, {
    keepAlive: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('Connected to MongoDB'))

// check if mongoose connection fails
const isConnected = mongoose.connection;
isConnected.on("error", e => {
    console.log("Connection error:", e);
});

client.login(token);