require('dotenv').config();
const {SlashCommandBuilder} = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('verify')
		.setDescription('Replies with Verification list'),
    
	async execute(interaction) {
		await interaction.reply({
      content: 'Verify your pass https://ticketland.io/verify',
      ephemeral: true,
    });
	},
};
