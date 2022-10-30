const fs = require('node:fs')
const path = require('node:path')
const {REST, Routes} = require('discord.js')

const commandsPath = path.join(__dirname, 'cmd')

const commands = []
const commandFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith('.js'))

// Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file)
	const command = require(filePath)

	commands.push(command.data.toJSON())
}

// Construct and prepare an instance of the REST module
const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN)

// and deploy your commands!
const main = async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`)

		// The put method is used to fully refresh all commands in the guild with the current set
		const data = await rest.put(
			Routes.applicationCommands(process.env.DISCORD_CLIENT_ID),
			{ body: commands }
		)

		console.log(`Successfully reloaded ${data.length} application (/) commands.`)
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error)
	}
}

main()
	.then(() => console.log('Success'))
	.catch((error) => console.log('Error', error))
