module.exports = {
    name: 'leavechannel',
    aliases: ['setleave'],
    code:`
$onlyIf[$message!=;:x: Usage:\`\`\`\n$getServerVar[prefix]leavechannel [channel | id | name\]\n\`\`\`\nCurrent Channel: $getServerVar[leave]]
$onlyPerms[admin;:x: Looks like you're not an Administrator.]
$description[**Done**, I will now send leave messages in <#$findChannel[$message]>]
$color[#303136]
$addButton[1;Executed by $userTag;secondary;bobo;yes;]
$setServerVar[leave;$findChannel[$message]]
$cooldown[5s;:stopwatch: %time%]
`
}