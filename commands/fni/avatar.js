module.exports = {
    name: 'avatar',
    aliases: ['av', 'pfp'],
    code:`
$author[$userTag[$findUser[$message;yes]];$userAvatar[$findUser[$message;yes]]]
$image[$userAvatar[$findUser[$message;yes]]]
$color[#303136]
$addButton[1;Download;link;$userAvatar[$findUser[$message;yes]];no;]
$addButton[2;Requested by $username;secondary;ok;yes;]
$cooldown[5s;:stopwatch: %time%]
`
}