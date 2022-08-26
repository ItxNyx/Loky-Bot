module.exports = {
    name: 'joinmessage',
    aliases: ['joinmsg'],
    code:`
$onlyIf[$message!=;:x: Usage:\`\`\`\n$getServerVar[prefix]joinmessage [message\]\n\`\`\`\nCurrent Message: $getServerVar[jmsg]]
$onlyPerms[admin;:x: Looks like you're not an Administrator.]
$setServerVar[jmsg;$message]
$description[**Done**, The new welcome message will be:\`\`\`
$message
\`\`\`]
$addField[1;Output:;\`\`\`
$replaceText[$replaceText[$replaceText[$replaceText[$message;{user};<@$authorID>];{user.name};$username];{server.name};$serverName];{user.tag};$userTag]
\`\`\`]
$color[#303136]
$addButton[1;Executed by $userTag;secondary;bobo;yes;]
$cooldown[5s;:stopwatch: %time%]
`
}