const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjE1NTQ4MTUzMjE0NTMzNjMz.XWPs5w.IufoauxaY1qGU07Cy4g1SCVvC9A';

bot.on('ready', () =>{
console.log ('this bot is online!');
})

bot.on('message', msg=>{
    if(msg.content === "hi"){
        msg.reply('HEY BOI!');
    }
})

bot.on('message', msg=>{
    if(msg.content === "hello"){
        msg.reply('hey!');
    }
})

bot.on('message', msg=>{
    if(msg.content === "I love you"){
        msg.reply('Love you too!');
    }
})

bot.on('message', msg=>{
    if(msg.content === "gg"){
        msg.reply('GG Bro!');
    }
})

bot.on('message', msg=>{
    if(msg.content === "M"){
        msg.reply('Pls meme');
    }
})

bot.on('message', msg=>{
    if(msg.content === "Bye"){
        msg.reply('Bye, see you later.');
    }
})

bot.on('message', msg=>{
    if(msg.content === "help"){
        msg.reply('Commmands - !website for official website     !roster for active roster   !!owner for clan owner info.');
    }
})

bot.on('message', msg=>{
    if(msg.content === "!website"){
        msg.reply('https://bit.ly/savageowners');
    }
})

bot.on('message', msg=>{
    if(msg.content === "!roster"){
        msg.reply('Our current main competitive roster - Matrix, Beast, Muhit, Ninja, Slash, Meros.');
    }
})

bot.on('message', msg=>{
    if(msg.content === "!owner"){
        msg.reply('Contact clan owner on discord @GoromerSodon#8910');
    }
})

bot.on('message', msg=>{
    if(msg.content === "!owners wife"){
        msg.reply('A N I K A ;_;');
    }
})

bot.on('message', msg=>{
    if(msg.content === "Fuck you"){
        msg.reply('You are a gay');
    }
})

bot.on('message', msg=>{
    if(msg.content === "!Owners dondo"){
        msg.reply('Bigger than your dondo');
    }
})

bot.on('message', msg=>{
    if(msg.content === "gay"){
        msg.reply('Congratulations, you are an official gay now. Find your partner.');
    }
})
bot.login(token)

