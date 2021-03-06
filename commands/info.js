const Discord = require("discord.js")
const { colour } = require ("../colours.json");
const { rcolour } = require ("../colours.json");
const version = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");
let cpuStat = require("cpu-stat")
const ms = require("ms")
const info = require("../info.json");

exports.run = (client, message, args) => { // eslint-disable-line no-unused-vars

    cpuStat.usagePercent(function(err, percent, seconds) {
        if (err) {
            return console.log(err);
        }
        const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        const embedStats = new Discord.RichEmbed()
            .setColor(colour)
            .setAuthor("Aqua | アクア", client.user.avatarURL)
            .addField("Version", info.version, true)
            .addField("Library", info.library, true)
            .addField("Website", info.website, true)
            .addField("Uptime ", duration, true)
            .addField("Servers", client.guilds.size.toLocaleString(), true)
            .addField("Users", client.users.size.toLocaleString(), true)
            .addField("CPU Usage", percent.toFixed(2)+ "%", true)
            .addField("Developers", info.developers, true)
            .addBlankField(true)
        message.channel.send(embedStats)
    
    });
};


exports.config = {
    name: "info",
    usage: "!info",
    description: "Display information."
}