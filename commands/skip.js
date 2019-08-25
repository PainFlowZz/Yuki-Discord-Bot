exports.run = async (message) => {
    
    const { voiceChannel } = message.member;
    if (!voiceChannel) return message.channel.send('I\'m sorry but you need to be in a voice channel to play music!');
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return message.channel.send('There is nothing playing that I could skip for you.');
    serverQueue.connection.dispatcher.end('Skip command has been used!');

} 

exports.config = {
    name: "skip",
    usage: "!skip",
    description: "Skips the currently playing song."
}