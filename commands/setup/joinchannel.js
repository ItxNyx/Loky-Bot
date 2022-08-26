module.exports = {
    name: 'joinchannel',
    aliases: ['setjoin'],
    code:`
$onlyIf[$message!=;:x: Usage:\`\`\`\n$getServerVar[prefix]joinchannel [channel | id | name\]\n\`\`\`\nCurrent Channel: $getServerVar[join]]
$onlyPerms[admin;:x: Looks like you're not an Administrator.]
$description[**Done**, I will now send welcome messages in <#$findChannel[$message]>]
$color[#303136]
$addButton[1;Executed by $userTag;secondary;bobo;yes;]
$setServerVar[join;$findChannel[$message]]
$cooldown[5s;:stopwatch: %time%]
`
}