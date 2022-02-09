const botconfig = require(`./botconfig.json`);
const colors = require(`./colors.json`);
const discord = require('discord.js');
const client = new discord.Client();
const perfix = '/';
client.once('ready', () => {
    console.log(`${client.user.tag} is ready`);
});
client.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === '👤 | Member');
    guildMember.roles.add(welcomeRole);

});
client.on('guildMemberAdd', member => {
    let welcomeChannel = client.channels.cache.get("940645291139424326")
    let targetchannel = '940219246946955274'
    if (welcomeChannel) {

        let welcomeEmbed = new discord.MessageEmbed()
        if (member.user.bot) {

            if (member.user.client) {
                client.on('guildMemberAdd', guildMember => {
                    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === '👤 | Member');
                    guildMember.roles.add(welcomeRole);

                });
                welcomeEmbed.setColor(colors.yellow)
                welcomeEmbed.setAuthor(`${member.guild.name}`)
                welcomeEmbed.setDescription(`سلام <@${member.user.id}> به سرور ما خوش اومدی حتما یه سر بزن به ${member.guild.channels.cache.get(targetchannel).toString()} امیدوارم از سرورمون خوشت بیاد`)
                welcomeEmbed.setThumbnail(member.user.displayAvatarURL())
                welcomeEmbed.setFooter(`${client.user.username} (:`)
                welcomeChannel.send(welcomeEmbed)
            }
        } else {
            client.on('guildMemberAdd', guildMember => {
                let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === '👤 | Member');
                guildMember.roles.add(welcomeRole);

            });
            welcomeEmbed.setColor(colors.aqua)
            welcomeEmbed.setAuthor(`${member.guild.name}`)
            welcomeEmbed.setDescription(`سلام <@${member.user.id}> به سرور ما خوش اومدی حتما یه سر بزن به ${member.guild.channels.cache.get(targetchannel).toString()} امیدوارم از سرورمون خوشت بیاد`)
            welcomeEmbed.setThumbnail(member.user.displayAvatarURL())
            welcomeEmbed.setFooter(`${client.user.username}  (:  `)
            welcomeChannel.send(welcomeEmbed)
        }
    } else {
        console.log("Welcome Channel Yaft Nashod")
    }
})
client.on("ready", () => {
    function YousamPower() {
        let hungry = ["HITMAN", "YASIN", ":)  YH  (:"]
        let Power = Math.floor(Math.random() * hungry.length);
        client.user.setActivity(hungry[Power], { type: "STREAMING", url: "https://discord.gg/wTrSgShj" });
    };
    setInterval(YousamPower, 2000)
});

client.on('message', message => {
        let args = message.content.substring(perfix.length).split(" ")
        let args2 = message.content.split(" ")
        if (args2[0] === "سلام" || args2[1] === "سلام" || args2[2] === "سلام" || args2[3] === "سلام") {
            message.reply("salam")
            message.react("❤")
        }
        if (args2[0] === "خوبی" || args2[1] === "خوبی" || args2[2] === "خوبی" || args2[3] === "خوبی" || args2[0] === "hkobi" || args2[1] === "hkobi" || args2[2] === "hkobi" || args2[3] === "hkobi") {
            message.reply("مرسی داش")
            message.react("❤")
        }







        if (message.content.startsWith(perfix)) {
            if (args[0] === "clear" && args[1] <= 100) {
                message.channel.bulkDelete(args[1]);
            } else {

                message.channel.send(".فقط عدد وارد کنید. بیشتر از 100 نمیشود")


            }

        }

    }


)






client.login(botconfig.token);