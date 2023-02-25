require('dotenv').config()

const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'ask',
    description: "Ask DaVinci a question.",
    options: [
        {
            name: "prompt",
            description: "your question",
            type: 3,
            required: true
        }
    ],
  },
  {
    name: 'info',
    description: "Get information on DaVinci.",
  },
  {
    name: 'help',
    description: "Discover what you can do with DaVinci.",
  },
];

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_KEY);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();