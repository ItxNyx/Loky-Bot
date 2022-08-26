module.exports = {
    name: 'joinimage',
    aliases: ['joinimg'],
    code: `
$onlyIf[$message!=;:x: Usage:\`\`\`\n$getServerVar[prefix]joinimage [link\]\n\`\`\`]
$onlyPerms[admin;:x: Looks like you're not an Administrator.]
$description[**Done**, the new welcome image will be:]
$image[$message]
$color[#303136]
$setServerVar[img;$message]
`
}