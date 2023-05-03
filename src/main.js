//
//
//                   FuryForever's Github:
//               https://github.com/Furyforev3r
//                   Follow for More!
//
//
//                   FuryForeve's Twitter:
//               https://twitter.com/furyforev3r
//                      Template by:
//               https://github.com/kayqueprogram
//
//
//                       Ty <3
//                         :D


const { Client, Collection, GatewayIntentBits } = require('discord.js');
const fs = require('fs');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildModeration,GatewayIntentBits.MessageContent] });

client.commands = new Collection();

client.commandArray = [];

const functionFolders = fs.readdirSync('./src/functions');
for (const folder of functionFolders) {
    const functionFiles = fs.readdirSync(`./src/functions/${folder}`).filter((file) => file.endsWith('.js'))

    for (file of functionFiles) require(`./functions/${folder}/${file}`)(client);
}

client.handleEvents();
client.handleCommands();

client.login('BOT TOKEN!!!!!!!!!!!!!!!')
