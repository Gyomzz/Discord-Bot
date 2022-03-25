const { log } = require('node:console');
const fs = require('node:fs');

module.exports = {
	name: 'messageCreate',
	once: false,
	execute(message) {
        console.log(`message from ${message.author.username} in ${message.channelId} : ${message}`);
        if(message.content.toLowerCase() === '!help') {
            try {
                message.channel.send('Voici la liste des commandes')
            } catch(e) {
                    
            }
            const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
            for (const file of commandFiles) {
                const command = require(`../commands/${file}`);
                try {
                    message.channel.send(`/${command.data.name} : ${command.data.description}`)
                } catch(e) {
                    
                }
            }
           
        }
	}
};
