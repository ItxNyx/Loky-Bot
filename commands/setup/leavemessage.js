module.exports = {
    name: 'leavemessage',
    aliases: ['leavemsg'],
    code:`
$onlyIf[$message!=;:x: Usage:\`\`\`\n$getServerVar[prefix]message [message\]\n\`\`\`Current Message: $getServerVar[leavemsg]]
$onlyPerms[admin;:x: Looks like you're not an Administrator.]
$description[**Done**, The new leave message will be:\`\`\`
$message
\`\`\`]
$addFoeld[1;Output:;\`\`\`
$replaceText[$replaceText[$replaceText[$replaceText[$message;{user};<@$authorID>];{user.name};$username];{server.name};$serverName];{user.tag};$userTag]
\`\`\`]
$color[#303136]
$addButton[1;Executed by $userTag;secondary;bobo;yes;]
$setServerVar[leavemsg;$message]
$cooldown[5s;:stopwatch: %time%]
`
}