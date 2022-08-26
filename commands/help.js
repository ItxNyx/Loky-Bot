module.exports = {
    name: 'help',
    code: `
$author[$userTag[$clientID];$userAvatar[$clientID]]
$title[Command List]
$thumbnail[$userAvatar[$clientID]]
$description[Usage: "\` ,command-name \`"]
$addField[M i s c e l l a n e o u s;\`banner\`]
$addField[E c o L o k y;\`balance\`, \`work\`, \`beg\`, \`inventory\`, \`deposit\`, \`withdraw\`]
$addField[S e r v e r S e t t i n g;\`joinchannel\`, \`joinmessage\`, \`leavechannel\`, \`leavemessage\`, \`joinimage\`]
$addField[F u n & I m a g e s;\`howgay\`, \`avatar\`]
$addField[M o d e r a t i o n;\`kick\`
]
$addField[U t i l i t i e s;\`help\`, \`ping\`, \`stats\`
]
$image[https://cdn.discordapp.com/attachments/1011630839785848845/1012229835524943902/IMG_20220825_131947.jpg]
$footer[Requested by $username]
$addTimestamp
$color[#303136]
$cooldown[5s;⏱️ %time%]
`
}