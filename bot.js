const {token} = require('./secret.json');
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("I am ready!");
});

// .startsWith = commands
// .includes = memes to post if someone says keyword in message
client.on("message", (message) => {
    if (message.content.startsWith("ping")) {
        message.channel.send("pong!");
    }

    if (message.content.startsWith(",help")) {
        message.channel.send("Commands: ping");
    }

    if (message.content.includes("BOG")) {
        message.channel.send("COME BACK FORSAN :MEGALUL:");
    }

    if (message.content.includes("homeless")) {
        const house = new Discord.Attachment('https://i.imgur.com/DkoestG.png');

        message.channel.send(house);
        message.channel.send("JUST GET A HOUSE")
    }

    if(message.content.includes("peace")){
        const goose_knife = new Discord.Attachment('https://i.imgur.com/sf0o3zI.png');

        message.channel.send(goose_knife);
        message.channel.send("Peace was never an option.");
    }


});

client.login(token);

/**
 * Function to return a random
 * @param min
 * @param max
 * @returns {*}
 */
function getRandomInt(min, max){
    min = Math.floor(min);
    max = Math.ceil(max);

    return Math.floor(Math.random() * (max - min)); //The maximum is exclusive and the minimum is exclusive
}