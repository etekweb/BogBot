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

        if (message.author.bot) return;

        if (message.content.startsWith(",help")) {
            message.channel.send("Commands: ping, it's cold");
        }


        if (message.content.toLowerCase().includes("homeless")) {
            const house = new Discord.Attachment('https://i.imgur.com/DkoestG.png');

            message.channel.send(house);
            message.channel.send("JUST GET A HOUSE")
        }

        if (message.content.toLowerCase().includes("peace")) {
            const goose_knife = new Discord.Attachment('https://i.imgur.com/sf0o3zI.png');

            message.channel.send(goose_knife);
            message.channel.send("Peace was never an option.");

        }

        if (message.content.toLowerCase().includes("take a seat")) {
            const hansen = new Discord.Attachment("https://i.imgur.com/kfbcXYS.png");
            message.channel.send(hansen);
        }

        if (message.content.includes("r/woosh")){
            message.channel.send("r/WOW r/kid r/you r/just r/got r/WOOOOOOSHED!!!! 😂😂👀\n\n"
            +"r/Wooosh r/means r/you r/didnt r/get r/the r/joke, r/as r/in r/the r/sound r/made r/when r/the r/joke r/woooshes r/over r/your r/head."
            + "r/I r/bet r/youre r/too r/stupid r/to r/get r/it r/IDIOT!! 😤😤😂\n\n"
            +  "r/My r/joke r/was r/so r/thoughtfully r/crafted r/and r/took r/me r/a r/total r/of r/3 r/minutes, r/you r/SHOULD r/be r/laughing. 🤬"
            +"r/Whats r/that? r/My r/joke r/is r/bad? r/I r/think r/thats r/just r/because r/you r/failed. r/I r/outsmarted r/you.🤭\n\n"
            +"r/In r/conclusion, r/I r/am r/posting r/this r/to r/the r/community r/known r/as r/Wooooosh r/to r/claim r/my r/internet r/points r/in r/your r/embarrassment 😏."
            +"r/Imbecile. r/The r/Germans r/refer r/to r/this r/action r/as r/Schadenfreude, r/which r/means r/harmjoy 😬😲."
            +"r/WOW! 🤪 r/Another r/reference r/I r/had r/to r/explain r/to r/you. 🤦‍♂️🤭"
            +"r/I r/am r/going r/to r/cease r/this r/conversation r/for r/I r/do r/not r/converse r/with r/simple r/minded r/persons.😏😂");
        }

        if (message.content.toLowerCase().includes("bog")) {
          let bog = ['COME BACK FORSAN <:MEGALUL:680613639996178483>',
              '<:MEGALUL:680613639996178483>  ᛏᚺᛖ ᛋᛟᚢᛚᛋ ᛟᚠ ᛏᚺᛖ ᛁᚾᚾᛟᚲᛖᚾᛏ ᛋᚺᚨᛚᛚ ᛒᚢᚱᚾ',
             '<:MEGALUL:680613639996178483> ☢ THE RADIATION MAKES ME STRONGER']

             message.channel.send(bog[getRandomInt(0, bog.length)])
        }


        if (message.content.toLowerCase().includes("boomer")) {
            const boomer = new Discord.Attachment('https://i.imgur.com/5PjuJjh.png');

            message.channel.send(boomer);
        }


        if (message.content.toLowerCase().startsWith("it's cold")) {
            message.channel.send("\"Wear a hat that covers your ears\"- Bonnie");

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