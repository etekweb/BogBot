const { token } = require('./secret.json');
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("I am ready!");
});

client.on("message", (message) => {
    if (message.content.startsWith("ping")) {
        message.channel.send("pong!");
    }

    if (message.content.startsWith("BOG")){
        message.channel.send("COME BACK FORSAN :MEGALUL:");
    }
});

client.login(token);