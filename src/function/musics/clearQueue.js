let clearQueue = (message, serverQueue) => {
    if (!message.member.voice.channel)
        return message.channel.send(
            "คุณต้องอยู่ในห้องสนทนาจึงจะสั่งล้างคิวได้ :triumph: "
        );
    try {
        serverQueue.songs = [];
        message.reply("🧹 ล้างคิวเรียบร้อย")
        serverQueue.connection.dispatcher.end();
    } catch (err) {
        console.log(err);
    }

}

module.exports = clearQueue;