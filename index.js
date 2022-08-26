const aoijs = require("aoi.js")

const bot = new aoijs.AoiClient({
  sharding: true,
  shardAmount: 2,
  token: "MTAwOTM5MzY4NDM4MDM4NTI4MA.Gc4wQX.CPJArzQPxncm3M86cPL_73edlcmNtRFhPDXBu0",
  prefix: ",",
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"]
})

//Events
bot.onMessage()

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commands/")

//Ready Event
bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})

bot.variables({
    prefix: ',',
    join: "",
    leave: "",
    jmsg: "Hello {user}, Welcome to {server.name}!",
    leavemsg: "Goodbye {user.tag}",
    img: "",
    cash: "0",
    bank: "0"
})

bot.joinCommand({
  channel: "$getServerVar[join]",
  code: `
$description[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[jmsg];{user};<@$authorID>];{user.name};$username];{server.name};$serverName];{user.tag};$userTag]]
$image[$getServerVar[img]]
$color[#303136]`
});
bot.onJoin();

bot.leaveCommand({
 channel: "$getServerVar[leave]",
 code:`
$description[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[leavemsg];{user};<@$authorID>];{user.name};$username];{server.name};$serverName];{user.tag};$userTag]]
$color[#303136]
`
});
bot.onLeave();