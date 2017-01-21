function RoleID(message,msg){
    if (msg === undefined) {
            message.channel.sendMessage("No role specified?");
            return;
        }
        let TRole = message.guild.roles.find("name", msg);
        if (TRole === null) {
            message.channel.sendMessage("Role could not be found?");
            return;
        }
        message.channel.sendMessage(`**Role Name:** ${TRole.name} **Role ID:** ${TRole.id}`);
}