require('dotenv').config();
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
    
	async execute(interaction) {
		await interaction.reply({
      content: `Command you requested help for does not exist!`,
      ephemeral: true,
    });
	},
};
