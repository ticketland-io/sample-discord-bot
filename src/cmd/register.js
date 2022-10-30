const {SlashCommandBuilder, PermissionsBitField} = require('discord.js')

// Allows admin to register the Discord server with Ticketland. We will store the server 
module.exports = {
	data: new SlashCommandBuilder()
		.setName('register')
		.setDescription('Registers Discord server with Ticketland'),
	async execute(interaction) {
    if(interaction.memberPermissions.has(PermissionsBitField.Flags.Administrator)) {
      // TODO: load the server details and store it on ticketland
    } else {
      await interaction.reply('Not an admin')
    }

	},
};
