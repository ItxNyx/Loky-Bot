module.exports = ({
    name: "kick",
    usage: "kick [user] (reason)",
    description: "Kicks the specified user",
    category: "Moderation",
    code: `$title[Kicked]
$description[Successfully Kicked $userTag[$get[user]]]
$addField[Moderator:;$userTag;no]
$addField[Reason:;$get[reason];no]
$color[#303136]
$addTimestamp
$thumbnail[$userAvatar[$get[user]]]
$kick[$get[user];$userTag: $get[reason]]
$let[reason;$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;No reason was provided.];false;$messageSlice[1]]]
$onlyIf[$rolePosition[$highestRole[$get[user]]]>$rolePosition[$highestRole[$clientID]];**⛔ I can't kick someone higher/equal to my role postion!!**]
$onlyIf[$rolePosition[$highestRole[$get[user]]]>$rolePosition[$highestRole[$authorID]];**⛔ You can't kick someone higher/equal than you on role position!!**]
$onlyBotPerms[kick;**:x: I need \`KICK_MEMBERS\` perms to kick a user!!**]
$onlyIf[$get[user]!=$ownerID;**:x: You can't kick the owner of the server!!**]
$onlyIf[$get[user]!=$authorID;**:x: It is not good to harm yourself 😢!!**]
$onlyIf[$get[user]!=undefined;**:x: Please specify a valid member!!**]
$onlyIf[$message[1]!=;**:x: Please specify a user to be kicked!!**]
$onlyPerms[kick;**:x: You need \`KICK_MEMBERS\` perms to kick a user!!**]
$let[user;$findMember[$message[1];no]]
$suppressErrors[Error Occurred!!]`
})