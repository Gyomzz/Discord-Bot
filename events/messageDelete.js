module.exports = {
	name: 'messageDelete',
	once: false,
	execute(message) {
        console.log(`message is deleted -> ${message}`);
	}
};
