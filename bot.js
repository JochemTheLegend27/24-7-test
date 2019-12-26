const Discord = require('discord.js');
const bot = new Discord.Client();



const PREFIX = '$';

const fs = require('fs');

//server speedy: 592070837516107806

//file oplsag coingame

bot.on('ready', () => {
    console.log('This bot is online!');
    bot.user.setActivity('$help', {type: 'PLAYING'});
    
})



const userUsedpinda = new Set();//persoon cooldown


var timerused = false; // server cooldown


bot.on('message', msg => {
var jochem = '398441594094616578';
if(msg.author.id === jochem && msg.content === 'wie ben ik'){
    msg.channel.sendMessage('Hallo Jochem, jij bent Jochem')
}

})

bot.login(process.env.BOT_TOKEN);
