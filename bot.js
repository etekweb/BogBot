const { token } = require('./secret.json');
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("I am ready!");
});

client.on("message", (message) => {
    if (message.channel.id === '680606214282936350') {
        if (message.content.startsWith("ping")) {
            message.channel.send("pong!");
        }
        if (message.content.startsWith(",help")) {
            message.channel.send("Commands: ping, BOG, homeless, it's cold");
        }

        if (message.content.includes("BOG")) {
            message.channel.send("COME BACK FORSAN :MEGALUL:");
        }

        if (message.content.includes("homeless")) {
            const house = new Discord.Attachment('https://i.imgur.com/DkoestG.png');

            message.channel.send(house);
            message.channel.send("JUST GET A HOUSE")
        }
    }

    if (message.content.toLowerCase().startsWith("it's cold")) {
        message.channel.send("\"Wear a hat that covers your ears\"- Bonnie");
    }
});

client.login(token);