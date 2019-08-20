const Discord = require("discord.js")
const { colour } = require ("../colours.json");
const { rcolour } = require ("../colours.json");
const version = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")
const ms = require("ms")
const info = require("../info.json");

exports.run = (bot, client, message, args) => { // eslint-disable-line no-unused-vars

    cpuStat.usagePercent(function(err, percent, seconds) {
        if (err) {
            return console.log(err);
        }
        const duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        const embedStats = new Discord.RichEmbed()
            .setColor(colour)
            .addField("Aqua | アクア", client.user.avatarURL)
            .addField("Version", info.version, true)
            .addField("Library", info.library, true)
            .addField("Website", info.website, true)
            .addField("Uptime ", "`" + duration + "`", true)
            .addField("Servers", "`" + bot.guilds.size.toLocaleString() + "`", true)
            .addField("Users", "`" + bot.users.size.toLocaleString()+ "`", true)
            .addField("CPU usage", "`" + percent.toFixed(2)+ "%`", true)
            .setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL)
            .setTimestamp()
        message.channel.send(embedStats)
    
    });
};


exports.config = {
    name: "info",
    usage: "!info",
    description: "Display bot information",
    accessableby: "Everyone"
}