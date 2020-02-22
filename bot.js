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


        if (message.author.bot) return;
        if (message.channel.id === '680606214282936350') {
            if (message.content.startsWith("ping")) {
                message.channel.send("pong!");
            }
            if (message.content.startsWith(",help")) {
                message.channel.send("Commands: ping, it's cold");
            }


            if (message.content.toLowerCase().includes("bog")) {
                let bog = ['COME BACK FORSAN <:MEGALUL:680613639996178483>',
                    '<:MEGALUL:680613639996178483>  ᛏᚺᛖ ᛋᛟᚢᛚᛋ ᛟᚠ ᛏᚺᛖ ᛁᚾᚾᛟᚲᛖᚾᛏ ᛋᚺᚨᛚᛚ ᛒᚢᚱᚾ',
                    '<:MEGALUL:680613639996178483> ☢ THE RADIATION MAKES ME STRONGER']

                message.channel.send(bog[getRandomInt(0, bog.length)])
            }

            if (message.content.includes("homeless")) {
                const house = new Discord.Attachment('https://i.imgur.com/DkoestG.png');

                message.channel.send(house);
                message.channel.send("JUST GET A HOUSE");
            }
            if (message.content.includes("boomer")) {
                const boomer = new Discord.Attachment('https://i.imgur.com/5PjuJjh.png');

                message.channel.send(boomer);
            }
        }

        if (message.content.toLowerCase().startsWith("it's cold")) {
            message.channel.send("\"Wear a hat that covers your ears\"- Bonnie");

        }


        if (message.content.includes("homeless")) {
            const house = new Discord.Attachment('https://i.imgur.com/DkoestG.png');

            message.channel.send(house);
            message.channel.send("JUST GET A HOUSE")
        }

        if (message.content.includes("peace")) {
            const goose_knife = new Discord.Attachment('https://i.imgur.com/sf0o3zI.png');

            message.channel.send(goose_knife);
            message.channel.send("Peace was never an option.");

        }

        if (message.content.includes("take a seat")) {
            const hansen = new Discord.Attachment("https://i.imgur.com/ckxuJr2.png");
            message.channel.send(hansen);
        }

    }
);

client.login(token);

/**
 * Function to return a random
 * @param min
 * @param max
 * @returns {*}
 */
function getRandomInt(min, max) {
    min = Math.floor(min);
    max = Math.ceil(max);

    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}