require('dotenv').config();
const {SlashCommandBuilder, GuildMemberManager, Role} = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('verify')
		.setDescription('Replies with Verification list'),
    
	async execute(interaction) {
		await interaction.reply({
      content: 'Verify your pass https://ticketland.io/verify',
      ephemeral: true,
    })

    // TODO: this logic will be async and executed in some other service. 
    // After user verified the pass with Ticketland he will be assigned a role
    let role = interaction.member.guild.roles.cache.find(role => role.name === 'ticketland-pass');
    if (role) { 
      interaction.guild.members.cache
      .get(interaction.member.id)
      .roles.add(role)
    }
	},
};
