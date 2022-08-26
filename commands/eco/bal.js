module.exports = {
    name: 'balance',
    aliases:["bal"],
    code:`
$title[$username[$findUser[$message;yes]]'s balance]
$thumbnail[$userAvatar[$findUser[$message;yes]]]
$addField[Net Worth;$sum[$getUserVar[cash];$getUserVar[bank]]]
$addField[Bank;$getUserVar[bank]]
$addField[Cash;$getUserVar[cash]]
$footer[Requested by $username]
$addTimestamp
$color[#303136]
`
}